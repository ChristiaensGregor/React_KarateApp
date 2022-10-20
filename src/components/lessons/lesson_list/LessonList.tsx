import { useEffect, Key, useState, useCallback, useContext } from "react";
import { ref, set, remove, onValue } from "firebase/database";
import { LessonInterface } from "../../../domain/LessonInterface";
import { DbLessonInterface } from "../../../domain/DbLessonInterface";
import { LessonCard } from "../index";
import { AddLesson } from "../index";
import { db } from "../../../domain/Database";
import dayjs from "dayjs";
import Paper from "@mui/material/Paper";
import "./LessonList.css";

export const LessonList = () => {
  const [lessons, setLessons] = useState<LessonInterface[]>([]);
  var init = false;
  const getLessons = useCallback(() => {
    if (!init) {
      const lessonsRef = ref(db, "lessons");
      onValue(lessonsRef, (snapshot) => {
        const data = snapshot.val();
        var dbLessons: LessonInterface[] = [];
        Object.values(data).forEach((dataLesson: any) => {
          const lesson: LessonInterface = {
            id: dataLesson.id as string,
            date: dayjs(dataLesson.date, "DD/MM/YYYY"),
            type: dataLesson.type as string,
            location: dataLesson.location as string,
            expired: dataLesson.expired as Boolean,
          };
          var day = new Date();
          day.setDate(day.getDate() - 1);
          if (!lesson.date.isAfter(dayjs(day)) && lesson.expired === false) {
            console.log("Setting " + lesson.id + " to expired");
            setLesson(lesson.id, {
              id: lesson.id,
              date: lesson.date.format("DD/MM/YYYY"),
              type: lesson.type,
              location: lesson.location,
              expired: true,
            });
          }
          dbLessons.push(lesson);
        });
        dbLessons = dbLessons.sort((l1, l2) => (l1.date.isAfter(l2.date) ? 1 : -1));
        console.log("Lessons from database:");
        console.log(dbLessons);
        setLessons(dbLessons);
      });
    }
    init = true;
  }, []);

  useEffect(() => {
    getLessons();
  }, [getLessons]);

  function setLesson(lessonId: Key, lesson: DbLessonInterface) {
    set(ref(db, "lessons/" + lessonId), lesson);
  }

  function deleteLesson(lessonId: Key) {
    remove(ref(db, "lessons/" + lessonId));
  }

  return (
    <>
      <Paper className="banner" elevation={1}>
        <h4 className="title">List Lessons</h4>
        <AddLesson setLesson={setLesson} />
      </Paper>
      {lessons.map((lesson) => {
        return (
          <div className="wrapper" key={lesson.id}>
            <LessonCard lesson={lesson} deleteLesson={deleteLesson} />
          </div>
        );
      })}
    </>
  );
};
