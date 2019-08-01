const express = require("express");
const usersRouter = require("../routers/users");
const tasksRouter = require("../routers/tasks");
const csp = require("helmet-csp");
const path = require("path");
require("../db/mongoose");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(usersRouter);
app.use(tasksRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.use(
  csp({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["mern-task-manager.herokuapp.com", "data:"]
    }
  })
);

app.listen(port, () => console.log("Listening on port " + port));
