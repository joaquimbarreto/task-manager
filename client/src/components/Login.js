import React, { useState } from "react";
import usersAPI from "../usersAPI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email,
    password
  };

  const handleSubmit = () => {
    usersAPI.login(user);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form action="" method="get" className="form-login">
        <div className="form-login">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleEmail}
            required
          />
        </div>
        <div className="form-login">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
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
