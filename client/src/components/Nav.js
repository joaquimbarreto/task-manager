import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
