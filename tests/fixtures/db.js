const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Task = require("../../models/task");

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: "Tony DiNozzo",
  email: "tony@ncis.org",
  password: "12345678",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }
  ]
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "First task",
  completed: false,
  owner: userOne._id
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "Second task",
  completed: true,
  owner: userOne._id
};

const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
};

module.exports = {
  userOneId,
  userOne,
  taskOne,
  taskTwo,
  setupDatabase
};
