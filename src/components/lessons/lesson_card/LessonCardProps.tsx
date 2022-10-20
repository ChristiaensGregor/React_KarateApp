import { Key } from "react";
import { LessonInterface } from "../../../domain/LessonInterface";

export interface LessonCardProps {
  lesson: LessonInterface;
  deleteLesson: (lessonId: Key) => void;
}
