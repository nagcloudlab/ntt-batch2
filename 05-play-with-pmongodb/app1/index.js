const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db1");

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});
const Todo = mongoose.model("Todo", TodoSchema, "todos");

// const todo1 = new Todo({ title: "Learn Mongoose", completed: false });
// const promise = todo1.save();
// promise.then((todo) => console.log(todo)).catch((err) => console.log(err));

Todo.find({}).then((todos) => {
  todos.forEach((todo) => {
    console.log(todo);
  });
});
