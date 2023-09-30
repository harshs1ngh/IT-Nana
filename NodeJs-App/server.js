const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/"));

//Http requests
app.post("/save-task", function (req, res) {
  const taskObj = req.body;
  console.log("saved task: ", taskObj.task);
  res.send({ savedTask: taskObj.task });
});

app.get("/get-tasks", function (req, res) {
  const tasks = ["Write Js code", "Go to gym", "Read 10 pages"];
  res.send({ tasks: tasks });
});

app.listen(port, () => `Server running on port ${port}`);
