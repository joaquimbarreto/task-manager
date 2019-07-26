// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    console.log("connected");

    const db = client.db(databaseName);

    // db.collection("users").insertOne({
    //   name: "Joaquim",
    //   age: 43
    // });

    db.collection("tasks").insertMany(
      [
        {
          description: "Learn Ruby basics.",
          completed: true
        },
        {
          description: "Learn JavaScript basics.",
          completed: true
        },
        {
          description: "Learn React.js basics.",
          completed: true
        },
        {
          description: "Learn PostgreSQL basics.",
          completed: true
        },
        {
          description: "Learn Node.js basics.",
          completed: false
        },
        {
          description: "Learn MongoDB basics.",
          completed: false
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert taks");
        }

        console.log(result.ops);
      }
    );
  }
);
