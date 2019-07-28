import React, { useState, useEffect } from "react";
import tasksAPI from "../tasksAPI";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    tasksAPI.tasks().then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => {
          return <li key={task.id}>{task.description}</li>;
        })}
      </ul>
    </div>
  );
};

export default Tasks;
