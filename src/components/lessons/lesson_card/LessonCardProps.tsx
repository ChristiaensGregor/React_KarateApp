import { Key } from "react";
import { LessonInterface } from "../../../domain/LessonInterface";

export interface LessonCardProps {
  lesson: LessonInterface;
  // eslint-disable-next-line
  deleteLesson: (lessonId: Key) => void;
}
