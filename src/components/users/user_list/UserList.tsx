import { useState, useCallback, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../../domain/FireBaseConfig";
import { UserInterface } from "../../../domain/UserInterface";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./UserList.css";

export const UserList = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  var init = false;
  const getUsers = useCallback(() => {
    if (!init) {
      const usersRef = ref(db, "users");
      onValue(usersRef, (snapshot) => {
        const data = snapshot.val();
        var dbUsers: UserInterface[] = [];
        Object.values(data).forEach((dataUser: any) => {
          const user: UserInterface = {
            id: dataUser.id as string,
            userName: dataUser.userName as string,
            email: dataUser.email as string,
            grade: dataUser.grade as string,
            karateClub: dataUser.karateClub as string,
            progress: dataUser.progress as string,
          };
          dbUsers.push(user);
        });
        setUsers(dbUsers);
      });
    }
    init = true;
  }, []);
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Paper className="banner" elevation={1}>
        <h4 className="title" id="listLessonsTitle">
          List Users
        </h4>
      </Paper>
      {users.map((user) => {
        return (
          <Card className="card" key={user.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="text.primary">
                {"" + user.userName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Username: {user.userName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email Address: {user.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="inherit">
                Edit
              </Button>
              <Button size="small" color="inherit">
                Delete
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};
