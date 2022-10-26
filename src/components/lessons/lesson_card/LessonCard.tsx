import { useEffect, useState } from "react";
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
        <Typography variant="body2" color="text.secondary">
          On {lesson.date.format("DD/MM/YYYY")} there will be a {lesson.type} training in the dojo located in {lesson.location}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="inherit">
          Edit
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
  const { innerWidth, innerHeight } = window;
  return innerWidth;
}
