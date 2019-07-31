import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import usersAPI from "../usersAPI";

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    usersAPI.validate(token).then(res => {
      if (res.error) {
      } else {
        setUser(res.data);
      }
    });
  }, []);

  return (
    <div className="user-details">
      <div className="user-details-header">
        <h2>Account details</h2>
      </div>
      <div className="user-details-main">
        <div className="current-user-details">
          <p>
            Name: <strong>{user.name}</strong>
          </p>
          <p>
            Email: <strong>{user.email}</strong>
          </p>
        </div>
      </div>
      <Link to={"/user/tasks"}>
        <button id="user-back-to-tasks">Back To Tasks</button>
      </Link>
      {/* <button>Update</button> */}
    </div>
  );
};

export default User;
