import { Key } from "react";

export interface DbLessonInterface {
  id: Key;
  date: string;
  type: string;
  location: string;
  expired: boolean;
  participants: string[];
}
