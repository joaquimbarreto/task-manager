const express = require("express");
const usersRouter = require("../routers/users");
const tasksRouter = require("../routers/tasks");
require("../db/mongoose");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(usersRouter);
app.use(tasksRouter);

app.listen(port, () => console.log("Listening on port " + port));
