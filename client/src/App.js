import React, { useState, useEffect } from "react";
// import Tasks from "./components/Tasks";
import Login from "./components/Login";
import "./App.css";
import usersAPI from "./usersAPI";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    usersAPI.user().then(res => setUser(res.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      <Login user={user} />
      {/* {user ? <Tasks /> : <Login />} */}
    </div>
  );
};

export default App;
