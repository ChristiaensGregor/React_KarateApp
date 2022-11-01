import { Key } from "react";
import { Dayjs } from "dayjs";

export interface LessonInterface {
  id: Key;
  date: Dayjs;
  type: String;
  location: String;
  expired: Boolean;
  participants: String[];
}
