import { useEffect, useState, Key } from "react";
import { LessonCardProps } from "./LessonCardProps";
import "./LessonCard.css";
import banner_kumite_wide from "../../../resources/banner_kumite_wide.png";
import banner_kumite from "../../../resources/banner_kumite.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ref, set } from "firebase/database";
import { db } from "../../../domain/FireBaseConfig";
import { auth } from "../../../domain/FireBaseConfig";

export const LessonCard = ({ lesson, deleteLesson }: LessonCardProps) => {
  const [windowWidth, setWindowSize] = useState<number>(getWindowWidth());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowWidth());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function participate() {
    let user: string = auth.currentUser?.uid!;
    if (user) {
      if (lesson.participants) {
        if (lesson.participants.find((id) => id === user)) {
          const index = lesson.participants.indexOf(user);
          if (index !== -1) {
            lesson.participants.splice(index, 1);
          }
        } else {
          lesson.participants.push(user);
        }
      } else {
        lesson.participants = [user];
      }
      var dbLesson = {
        id: lesson.id,
        date: lesson.date?.format("DD/MM/YYYY"),
        type: lesson.type,
        location: lesson.location,
        expired: lesson.expired,
        participants: lesson.participants,
      };
      set(ref(db, "lessons/" + (lesson.id as Key)), dbLesson);
    }
  }

  return (
    <Card>
      <CardMedia
        component="img"
        image={windowWidth > 500 ? banner_kumite_wide : banner_kumite}
        alt="Image representing lesson type"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={lesson.expired ? "error" : "text.primary"}
          id={lesson.id + "Id"}
        >
          {lesson.type + " " + lesson.date.format("DD/MM/YYYY") + " " + lesson.location + " " + (lesson.expired ? "Expired" : "")}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" color="text.primary">
          {" "}
          Participants: {lesson.participants ? lesson.participants.length : 0}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          On {lesson.date.format("DD/MM/YYYY")} there will be a {lesson.type} training in the dojo located in {lesson.location}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="inherit" onClick={participate}>
          Participate
        </Button>
        <Button
          size="small"
          color={lesson.expired ? "error" : "inherit"}
          onClick={() => {
            deleteLesson(lesson.id);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

function getWindowWidth() {
  const { innerWidth } = window;
  return innerWidth;
}
