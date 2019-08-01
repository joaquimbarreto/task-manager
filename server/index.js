const express = require("express");
const usersRouter = require("../routers/users");
const tasksRouter = require("../routers/tasks");
const csp = require("express-csp-header");
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
    policies: {
      "default-src": [csp.SELF],
      "img-src": ['data:', 'mern-task-manager.herokuapp.com']
    }
  })
);

app.listen(port, () => console.log("Listening on port " + port));
