import React, { useEffect, Key, useState, useCallback, useRef } from "react";
import { ref, set, remove, onValue } from "firebase/database";
import dayjs from "dayjs";
import Paper from "@mui/material/Paper";
import { LessonInterface } from "../../../domain/LessonInterface";
import { DbLessonInterface } from "../../../domain/DbLessonInterface";
import AddLesson from "../add_lesson/AddLesson";
import LessonCard from "../lesson_card/LessonCard";
import { db } from "../../../domain/FireBaseConfig";
import "./LessonList.css";

export default function LessonList() {
  const [lessons, setLessons] = useState<LessonInterface[]>([]);
  const initRef = useRef(false);
  // eslint-disable-next-line
  const handleSetLesson = useCallback((lessonId: Key, lesson: DbLessonInterface) => {
    set(ref(db, `lessons/${lessonId}`), lesson);
  }, []);

  const getLessons = useCallback(() => {
    const init = initRef.current;
    if (!init) {
      const lessonsRef = ref(db, "lessons");
      onValue(lessonsRef, (snapshot) => {
        const data = snapshot.val();
        let dbLessons: LessonInterface[] = [];
        // eslint-disable-next-line
        Object.values(data).forEach((dataLesson: any) => {
          const lesson: LessonInterface = {
            id: dataLesson.id as string,
            date: dayjs(dataLesson.date, "DD/MM/YYYY"),
            type: dataLesson.type as string,
            location: dataLesson.location as string,
            expired: dataLesson.expired as boolean,
            participants: dataLesson.participants ? (dataLesson.participants as string[]) : [],
          };
          const day = new Date();
          day.setDate(day.getDate() - 1);
          if (!lesson.date.isAfter(dayjs(day)) && lesson.expired === false) {
            handleSetLesson(lesson.id, {
              id: lesson.id,
              date: lesson.date.format("DD/MM/YYYY"),
              type: lesson.type,
              location: lesson.location,
              expired: true,
              participants: lesson.participants,
            });
          }
          dbLessons.push(lesson);
        });
        dbLessons = dbLessons.sort((l1, l2) => (l1.date.isAfter(l2.date) ? 1 : -1));
        setLessons(dbLessons);
      });
    }
    initRef.current = true;
  }, [handleSetLesson]);

  useEffect(() => {
    getLessons();
  }, [getLessons]);

  function deleteLesson(lessonId: Key) {
    remove(ref(db, `lessons/${lessonId}`));
  }

  const handleDeleteClick = (lessonId: Key) => {
    deleteLesson(lessonId);
  };

  return (
    <>
      <Paper
        className="banner"
        elevation={1}
      >
        <h4
          className="title"
          data-cy="lesson-list-title"
        >
          List Lessons
        </h4>
        <AddLesson setLesson={handleSetLesson} />
      </Paper>
      {lessons.map((lesson) => (
        <div
          className="wrapper"
          key={lesson.id}
        >
          <LessonCard
            lesson={lesson}
            deleteLesson={handleDeleteClick}
          />
        </div>
      ))}
    </>
  );
}
