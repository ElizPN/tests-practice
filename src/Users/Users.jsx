import axios from "axios";
import { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([1, 2, 3]);
  const loadUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div data-testid='user-item' key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};
