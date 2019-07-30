import React, { useState } from "react";
import { Link } from "react-router-dom";
import usersAPI from "../usersAPI";

const Register = props => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    usersAPI.register(newUser).then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        localStorage.removeItem("token");
        localStorage.setItem("token", res.data.token);
        props.history.push("/user/tasks");
      }
    });
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form action="" method="get" className="form-register">
        <div className="form-register">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-register">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-register">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-register">
          <input
            type="submit"
            onClick={handleSubmit}
            value="Register"
            style={{ float: "right" }}
          />
        </div>
      </form>
      <div>
        <p>or</p>
        <h2>Login</h2>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
