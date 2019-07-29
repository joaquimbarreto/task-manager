import React from "react";
import "../App.css";

const Nav = props => {
  return (
    <div className="nav">
      {props.user ? (
        <div>
          <p>User: {props.user.name}</p>
          <button onClick={props.logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please register here</h2>
          <button>Register</button>
        </div>
      )}
    </div>
  );
};

export default Nav;
