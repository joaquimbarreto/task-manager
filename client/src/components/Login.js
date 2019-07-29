import React, { useState } from "react";
import usersAPI from "../usersAPI";

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    usersAPI
      .login(user)
      .then(data => {
        props.login(data.user);
        localStorage.setItem("token", data.token);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="login">
      <h2>Register</h2>
      <button>Register</button>
      <p>or</p>
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
