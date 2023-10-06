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
  }
]

router
  .get('/', function (req, res, next) {
    res.json(todos);
  })
  .get('/:id', function (req, res, next) {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === Number.parseInt(id));
    if (todo)
      res.json(todo);
    else res.status(404).end();
  })
  .post('/', function (req, res, next) {
    const { title, type } = req.body;
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
  })
  .put('/:id', function (req, res, next) {
    const id = req.params.id;
    const { title, completed, type } = req.body;
    const todo = todos.find(todo => todo.id === Number.parseInt(id));
    todo.title = title;
    todo.completed = completed;
    res.json(todo);
  })
  .delete('/:id', function (req, res, next) {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === Number.parseInt(id));
    todos.splice(todos.indexOf(todo), 1);
    res.json(todo);
    res.status(204).end();
  });

module.exports = router;
