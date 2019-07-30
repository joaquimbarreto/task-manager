import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tasksAPI from "../tasksAPI";
import usersAPI from "../usersAPI";

const Tasks = props => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);
    // tasksAPI.tasks(token).then(res => setTasks(res.data));
    usersAPI.validate(token).then(res => {
      if (res.error) {
        console.log(res.error);
      } else {
        setUser(res.data);
        console.log(res.data);
      }
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    tasksAPI.tasks(token).then(res => setTasks(res.data));
    console.log("calling api");
  });

  const deleteTask = id => {
    const token = localStorage.getItem("token");
    tasksAPI.delete(id, token);
  };

  const handleNewTaskInput = event => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    tasksAPI.create(newTask, token);
  };

  return (
    <div className="tasks">
      <div className="tasks-header">
        <h3>User:</h3>
        <Link to={"/user"}>
          <h2>{user.name}</h2>
        </Link>
        <button onClick={props.logout}>Logout</button>
      </div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => {
          return (
            <li key={task._id}>
              {task.description}
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <div className="tasks-form">
        <form>
          <div className="form-new-task">
            <label>Create new task:</label>
          </div>
          <input
            type="text"
            name="new-task"
            id="new-task"
            onChange={handleNewTaskInput}
            required
          />
          <div className="form-new-task">
            <input
              type="submit"
              onClick={handleNewTaskSubmit}
              value="Create New Task"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tasks;