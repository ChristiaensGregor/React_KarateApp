import { useState, useCallback, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../../domain/Database";
import { UserInterface } from "../../../domain/UserInterface";

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
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.email}</p>
            <p>{user.userName}</p>
          </div>
        );
      })}
    </>
  );
};
