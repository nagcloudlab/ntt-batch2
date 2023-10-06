


const top5TodosBtn = document.getElementById('top5TodosBtn');
top5TodosBtn.addEventListener('click', (e) => {

    fetch("http://localhost:3000/todos")
        .then(res => res.json())
        .then(todos => {
            const todoRows = todos.map((todo, idx) => {
                return `
                    <tr>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed}</td>
                    </tr>
                `
            })
            document.getElementById('todos').innerHTML = todoRows.join('');
        })

})

const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementsByName('title')[0].value;

    fetch("http://localhost:3000/todos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    })
        .then(res => res.json())
        .then(res => {
            document.getElementsByName('title')[0].value = ""
            console.log(res)
        })

})