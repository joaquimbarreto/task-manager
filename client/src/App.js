import React, { useState } from "react";
import Tasks from "./components/Tasks";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({});

  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      {user ? <Tasks /> : <Login />}
    </div>
  );
};

export default App;
