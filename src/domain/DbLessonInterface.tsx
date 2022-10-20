import { Key } from "react";

export interface DbLessonInterface {
  id: Key;
  date: String;
  type: String;
  location: String;
  expired: Boolean;
}
