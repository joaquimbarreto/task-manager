import React, { useState } from "react";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import User from "./components/User";
import Nav from "./components/Nav";
import usersAPI from "./usersAPI";
import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";

const App = props => {
  const [user, setUser] = useState(null);

  const login = user => {
    console.log(user);
    setUser(user);
  };

  const logout = () => {
    const token = localStorage.getItem("token");
    usersAPI.logout(token);
    console.log("Logged Out");
    localStorage.removeItem("token");
    setUser(null);
    props.history.push("/");
  };

  return (
    <div className="App">
      <div className="main-content">
        <header className="App-header">
          <h1>Task Manager</h1>
        </header>
        <Nav user={user} logout={logout} />
        <Switch>
          <Route
            exact
            path="/"
            component={routerProps => <Login {...routerProps} login={login} />}
          />
          <Route
            exact
            path="/register"
            component={routerProps => <Register {...routerProps} />}
          />
          <Route
            exact
            path="/user"
            component={routerProps => <User {...routerProps} user={user} />}
          />
          <Route
            exact
            path="/user/tasks"
            component={routerProps => <Tasks {...routerProps} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
      <footer>
        <div>
          <p>
            This app is done with MongoDB, Express, React and Node.js (MERN)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default withRouter(App);
