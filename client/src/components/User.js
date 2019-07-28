import React, { useState, useEffect } from "react";
import usersAPI from "../usersAPI";

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    usersAPI.user().then(res => setUser(res.data));
  }, []);
  return (
    <div>
      <h2>Account details</h2>
      <p>{user.name}</p>
    </div>
  );
};

export default User;
