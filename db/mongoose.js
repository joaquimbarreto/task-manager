const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  }
});

// const andrew = new User({
//   name: "Andrew",
//   age: 27
// });

// andrew
//   .save()
//   .then(() => {
//     console.log(andrew);
//   })
//   .catch(error => console.log(error));

const Task = mongoose.model("Task", {
  descripton: {
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
