const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

const port = process.env.PORT || 5000;

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "company_db";
const collectionName = "employees";

//middleware
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/dist"));

//Http requests
app.get("/get-profile", async function (req, res) {
  const response = {
    name: "Harshit Singh",
    email: "harshit.singh@example.com",
    interests: "Programming, Reading",
  };

  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  res.send(response);
});

app.post("/update-profile", async function (req, res) {
  const payload = req.body;
  console.log(payload);

  if (Object.keys(payload).length === 0) {
    res.send({ error: "empty payload. Couldn't update user profile" });
  } else {
    //saving/updating user profile
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    //initiates the db
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    //save payload data to database
    payload["id"] = 1;
    const updateValues = { $set: payload };
    await collection.updateOne({ id: 1 }, updateValues, { upsert: true });
    client.close();

    res.send({ info: "updated user profile successfully" });
  }
});

app.listen(port, () => `Server running on port ${port}`);
