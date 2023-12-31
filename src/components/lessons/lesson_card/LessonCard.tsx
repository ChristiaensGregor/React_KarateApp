import React, { useEffect, useState, Key } from "react";
import "./LessonCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ref, set } from "firebase/database";
import bannerKumite from "../../../resources/bannerKumite.png";
import bannerKumiteWide from "../../../resources/bannerKumiteWide.png";
import { LessonCardProps } from "./LessonCardProps";
import { db, auth } from "../../../domain/FireBaseConfig";

export default function LessonCard({ lesson, deleteLesson }: LessonCardProps) {
  function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }

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
    let user: string;
    if (auth.currentUser?.uid) {
      user = auth.currentUser?.uid;
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
        // eslint-disable-next-line
        lesson.participants = [user];
      }
      const dbLesson = {
        id: lesson.id,
        date: lesson.date?.format("DD/MM/YYYY"),
        type: lesson.type,
        location: lesson.location,
        expired: lesson.expired,
        participants: lesson.participants,
      };
      set(ref(db, `lessons/${lesson.id as Key}`), dbLesson);
    }
  }
  const handleParticipateClick = () => {
    participate();
  };

  return (
    <Card
      id={lesson.id ? lesson.id.toString() : ""}
      data-cy={`lesson-card-${lesson.id}`}
    >
      <CardMedia
        component="img"
        image={windowWidth > 500 ? bannerKumiteWide : bannerKumite}
        alt="Image representing lesson type"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={lesson.expired ? "error" : "text.primary"}
          id={`${lesson.id}Id`}
        >
          {`${lesson.type} ${lesson.date.format("DD/MM/YYYY")} ${lesson.location} ${
            lesson.expired ? "Expired" : ""
          }`}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.primary"
          data-cy={`lesson-card-participants-${lesson.id}`}
        >
          {" "}
          Participants: {lesson.participants ? lesson.participants.length : 0}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          On {lesson.date.format("DD/MM/YYYY")} there will be a {lesson.type} training in the dojo
          located in {lesson.location}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="inherit"
          onClick={handleParticipateClick}
          data-cy={`lesson-card-participate-${lesson.id}`}
        >
          Participate
        </Button>
        <Button
          size="small"
          color={lesson.expired ? "error" : "inherit"}
          onClick={() => {
            deleteLesson(lesson.id);
          }}
          data-cy={`lesson-card-delete-${lesson.id}`}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
