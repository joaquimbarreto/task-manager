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

  const handleSubmit = event => {
    event.preventDefault();
    usersAPI.login(user).then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        props.login(res.data.user);
        localStorage.removeItem("token");
        localStorage.setItem("token", res.data.token);
      }
    });
  };

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    usersAPI.logout(token);
    console.log("Logged Out");
    localStorage.removeItem("token");
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
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
