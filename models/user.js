const mongoose = require("mongoose");

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

module.exports = User;
