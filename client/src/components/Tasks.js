import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tasksAPI from "../tasksAPI";
import usersAPI from "../usersAPI";

const Tasks = props => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskCreated, setNewTaskCreated] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    tasksAPI.tasks(token).then(res => setTasks(res.data));
    usersAPI.validate(token).then(res => {
      if (res.error) {
      } else {
        setUser(res.data);
      }
    });
  }, []);

  useEffect(() => {
    if (newTaskCreated) {
      const token = localStorage.getItem("token");
      tasksAPI.tasks(token).then(res => setTasks(res.data));
      setNewTaskCreated(false);
    }
  }, [newTaskCreated]);

  const deleteTask = id => {
    const token = localStorage.getItem("token");
    tasksAPI.delete(id, token);
    const newTasksSet = tasks.filter(task => task._id !== id);
    setTasks(newTasksSet);
  };

  const handleNewTaskInput = event => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    tasksAPI.create(newTask, token);
    setNewTaskCreated(true);
    document.getElementById("new-task").value = "";
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
      <div className="tasks-list">
        <ul>
          {tasks.map(task => {
            return (
              <div className="task-entry">
                <li key={task._id}>
                  <div className="task-description">{task.description}</div>
                  <div className="task-buttons">
                    <button
                      id="task-entry-delete"
                      onClick={() => deleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="tasks-form">
        <form>
          <div className="form-new-task">
            <input
              type="text"
              name="new-task"
              id="new-task"
              placeholder="Type new task here"
              onChange={handleNewTaskInput}
              required
            />
          </div>
          <div className="form-new-task">
            <input
              type="submit"
              id="submit-new-task"
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
