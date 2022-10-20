import { Key } from "react";
import { DbLessonInterface } from "../../../domain/DbLessonInterface";
import { LessonInterface } from "../../../domain/LessonInterface";

export interface AddLessonProps {
  setLesson: (lessonId: Key, lesson: DbLessonInterface) => void;
}
