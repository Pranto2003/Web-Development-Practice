import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    "title": "First Todo",
    "desc": "Description of this todo",
    "isDone": false,
  });

  todo.save();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
