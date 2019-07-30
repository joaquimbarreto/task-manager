import React from "react";
import { Link } from "react-router-dom";

const User = props => {
  return (
    <div>
      <h2>Account details</h2>
      <p>{props.user.name}</p>
      <p>{props.user.email}</p>
      <Link to={"/user/tasks"}>
        <button>Back to tasks</button>
      </Link>
      {/* <button>Update</button> */}
    </div>
  );
};

export default User;
