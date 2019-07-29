import React, { useState, useEffect } from "react";
import tasksAPI from "../tasksAPI";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    tasksAPI.tasks(token).then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => {
          return <li key={task._id}>{task.description}</li>;
        })}
      </ul>
    </div>
  );
};

export default Tasks;
