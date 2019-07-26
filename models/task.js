const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  }
});

// const newTask = new Task({
//   descripton: " Learn moongoose",
//   completed: false
// });

// newTask
//   .save()
//   .then(() => console.log(newTask))
//   .catch(error => console.log(error));

module.exports = Task;
