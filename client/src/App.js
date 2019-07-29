import React, { useState } from "react";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import User from "./components/User";
import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);

  const login = user => {
    setUser(user);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
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
  );
};

export default withRouter(App);
