import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import tasksAPI from "../tasksAPI";
import usersAPI from "../usersAPI";

const Tasks = props => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [tasksUpdated, setTasksUpdated] = useState(null);
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
    if (tasksUpdated) {
      const token = localStorage.getItem("token");
      tasksAPI.tasks(token).then(res => setTasks(res.data));
      setTasksUpdated(false);
    }
  }, [tasksUpdated]);

  const deleteTask = id => {
    const token = localStorage.getItem("token");
    tasksAPI.delete(id, token);
    const newTasksSet = tasks.filter(task => task._id !== id);
    setTasks(newTasksSet);
  };

  const handleTaskCompletedTrue = id => {
    const token = localStorage.getItem("token");
    tasksAPI.completedTrue(id, token);
    setTasksUpdated(true);
  };

  const handleTaskCompletedFalse = id => {
    const token = localStorage.getItem("token");
    tasksAPI.completedFalse(id, token);
    setTasksUpdated(true);
  };

  const handleNewTaskInput = event => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    tasksAPI.create(newTask, token);
    setTasksUpdated(true);
    document.getElementById("new-task").value = "";
  };

  return (
    <div className="tasks">
      <div className="tasks-header">
        <NavLink to={"/user"} className="user-link">
          <h2>{user.name}</h2>
        </NavLink>
        <button id="tasks-logout" onClick={props.logout}>
          Logout
        </button>
      </div>
      <div className="tasks-heading">
        <h2>Tasks</h2>
      </div>
      <div className="tasks-instructions">
        <p>(Double click on task to toggle completed.)</p>
      </div>
      <div className="tasks-form">
        <form>
          <div className="form-new-task">
            <input
              type="text"
              name="new-task"
              size="50"
              maxLength="60"
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
      <div className="tasks-list">
        <ul>
          {tasks.map(task => {
            if (task.completed === true) {
              return (
                <div key={task._id} className="completed-task-entry">
                  <li key={task._id}>
                    <div
                      className="completed-task-description"
                      onDoubleClick={() => handleTaskCompletedFalse(task._id)}
                    >
                      {task.description}
                    </div>
                    <div className="completed-task-buttons">
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
            }
            return (
              <div key={task._id} className="not-completed-task-entry">
                <li key={task._id}>
                  <div
                    className="not-completed-task-description"
                    onDoubleClick={() => handleTaskCompletedTrue(task._id)}
                  >
                    {task.description}
                  </div>
                  <div className="not-completed-task-buttons">
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
    </div>
  );
};

export default Tasks;
