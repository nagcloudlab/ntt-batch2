

const express = require('express');
const logger = require('./middlewares/logger')
const morgan = require('morgan')
const bodyParser = require('body-parser');


const todos = [
    {
        id: 1,
        title: "Task 1",
        completed: false,
        type: "home"
    },
    {
        id: 2,
        title: "Task 2",
        completed: false,
        type: "work"
    },
    {
        id: 3,
        title: "Task 3",
        completed: false,
        type: "work"
    }
]

const app = express();

// app.use(logger);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static('public'));
app.get("/todos", (req, res, next) => {
    const todoType = req.query.type;
    res.json(todos.filter(todo => todo.type === todoType || true));
})
app.post("/todos", bodyParser.urlencoded({ extended: false }), bodyParser.json(), (req, res, next) => {
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
    res.redirect("/")
})
app.param("id", (req, res, next) => {
    const id = req.params.id;
    req.id = Number.parseInt(id);
    next();
})
app.get("/todos/:id", (req, res, next) => {
    const todo = todos.find(todo => todo.id === req.id)
    if (todo) res.json(todo);
    else res.status(404).json({ message: "Todo not found" });
})


app.listen(3000, () => console.log('Example app listening on port 3000'));