const express = require("express");
const usersRouter = require("../routers/users");
const tasksRouter = require("../routers/tasks");
require("../db/mongoose");

const app = express();
const port = process.env.PORT || 3001;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
// });

app.use(express.json());
app.use(usersRouter);
app.use(tasksRouter);

app.listen(port, () => console.log("Listening on port " + port));

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "sshhhh", { expiresIn: "7 days" });
  // console.log(token);

  const data = jwt.verify(token, "sshhhh");
  // console.log(data);
};

myFunction();
