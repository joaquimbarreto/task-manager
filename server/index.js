const express = require("express");
const User = require("../models/user");
require("../db/mongoose");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.send(user))
    .catch(error => res.status(400).send(error));
});

app.listen(port, () => console.log("Listening on port " + port));
