// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    console.log("connected");

    const db = client.db(databaseName);

    // db.collection("users").findOne({ name: "Joaquim" }, (error, user) => {
    //   if (error) {
    //     return console.log("error in finding user");
    //   }

    //   console.log(user);
    // });

    // db.collection("users").insertOne({
    //   name: "Joaquim",
    //   age: 43
    // });

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Learn Ruby basics.",
    //       completed: true
    //     },
    //     {
    //       description: "Learn JavaScript basics.",
    //       completed: true
    //     },
    //     {
    //       description: "Learn React.js basics.",
    //       completed: true
    //     },
    //     {
    //       description: "Learn PostgreSQL basics.",
    //       completed: true
    //     },
    //     {
    //       description: "Learn Node.js basics.",
    //       completed: false
    //     },
    //     {
    //       description: "Learn MongoDB basics.",
    //       completed: false
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert taks");
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
