import { Key } from "react";
import { Dayjs } from "dayjs";

export interface LessonInterface {
  id: Key;
  date: Dayjs;
  type: string;
  location: string;
  expired: boolean;
  participants: string[];
}
