import { Key } from "react";
import { DbLessonInterface } from "../../../domain/DbLessonInterface.tsx";

export interface AddLessonProps {
  // eslint-disable-next-line
  setLesson: (lessonId: Key, lesson: DbLessonInterface) => void;
}
