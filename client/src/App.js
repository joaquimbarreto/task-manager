import React, { useEffect } from "react";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import User from "./components/User";
import usersAPI from "./usersAPI";
import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";

const App = props => {
  const logout = () => {
    const token = localStorage.getItem("token");
    usersAPI.logout(token);
    localStorage.removeItem("token");
    console.log("Logged Out");
    props.history.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    usersAPI.validate(token).then(res => {
      if (res.error) {
        console.log(res.error);
        props.history.push("/");
      } else {
        console.log(res.data);
        props.history.push("/user/tasks");
      }
    });
  }, [props.history]);

  return (
    <div className="App">
      <div className="main-content">
        <header className="App-header">
          <h1>Task Manager</h1>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            component={routerProps => <Login {...routerProps} />}
          />
          <Route
            exact
            path="/register"
            component={routerProps => <Register {...routerProps} />}
          />
          <Route
            exact
            path="/user"
            component={routerProps => <User {...routerProps} logout={logout} />}
          />
          <Route
            exact
            path="/user/tasks"
            component={routerProps => (
              <Tasks {...routerProps} logout={logout} />
            )}
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
