var express = require('express');
var router = express.Router();

const todos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: true
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false
  }
]

router.get('/', function (req, res, next) {
  // load 
  res.render('todos-view', { todos: todos });
});

router.post('/', function (req, res, next) {
  const reqBody = req.body;
  const { title, type } = reqBody
  const todo = {
    id: todos.length + 1,
    title,
    completed: false,
    type
  }
  todos.push(todo);
  //res.status(201).json(reqBody);
  res.redirect("/todos")
});

module.exports = router;
