import React, { useState } from "react";
import { Link } from "react-router-dom";
import usersAPI from "../usersAPI";

const Login = props => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    usersAPI.login(userInput).then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        props.login(res.data.user);
        localStorage.removeItem("token");
        localStorage.setItem("token", res.data.token);
        props.history.push("/user/tasks");
      }
    });
  };

  return (
    <div className="login">
      <div>
        <h2>Please register here</h2>
        <Link to={"/register"}>
          <button>Register</button>
        </Link>
        <p> or login below</p>
      </div>
      <h2>Login</h2>
      <form action="" method="get" className="form-login">
        <div className="form-login">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-login">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-login">
          <input
            type="submit"
            onClick={handleSubmit}
            value="Login"
            style={{ float: "right" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
