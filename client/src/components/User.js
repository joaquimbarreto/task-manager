import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import usersAPI from "../usersAPI";

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    usersAPI.validate(token).then(res => {
      if (res.error) {
        console.log(res.error);
      } else {
        setUser(res.data);
        console.log(res.data);
      }
    });
  }, []);
  return (
    <div>
      <h2>Account details</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Link to={"/user/tasks"}>
        <button>Back to tasks</button>
      </Link>
      {/* <button>Update</button> */}
    </div>
  );
};

export default User;
