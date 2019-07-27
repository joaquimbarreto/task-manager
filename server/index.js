const express = require("express");
const usersRouter = require("../routers/users");
const tasksRouter = require("../routers/tasks");
const Task = require("../models/task");
const User = require("../models/user");
require("../db/mongoose");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(usersRouter);
app.use(tasksRouter);

app.listen(port, () => console.log("Listening on port " + port));

const main = async () => {
  const user = await User.findById("5d3c98230e21285fda0ee9f1");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
