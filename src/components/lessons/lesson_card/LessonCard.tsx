import { LessonCardProps } from "./LessonCardProps";
import "./LessonCard.css";
import banner_kumite from "../../../resources/banner_kumite_wide.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const LessonCard = ({ lesson, deleteLesson }: LessonCardProps) => {
  return (
    <Card>
      <CardMedia component="img" height="200dvh" image={banner_kumite} alt="Image representing lesson type" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={lesson.expired ? "error" : "text.primary"}>
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
