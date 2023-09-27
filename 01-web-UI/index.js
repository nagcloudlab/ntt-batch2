
//--------------------------------------
// using DOM API
//--------------------------------------

const cardBody = document.querySelector('.card-body');
const greetBtn = document.querySelector('.btn-primary');
const hideBtn = document.querySelector('.btn-danger');
const showBtn = document.querySelector('.btn-success');

greetBtn.addEventListener('click', e => {
    cardBody.innerText = 'Hello World!';
})
hideBtn.addEventListener('click', e => {
    cardBody.style.display = 'none';
})
showBtn.addEventListener('click', e => {
    cardBody.style.display = 'block';
})

//--------------------------------------
// using DOM API + XHR/Fetch API
//--------------------------------------

const top5TodosBtn = document.querySelector('#top5-todos-btn');
const todosBody = document.querySelector('#todos');

top5TodosBtn.addEventListener('click', e => {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=5"
    const promise = fetch(url)
    promise
        .then(res => res.json())
        .then(todos => {
            const todoRows = todos.map(todo => {
                return `
                <tr>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed}</td>
                </tr>
            `
            })
            todosBody.innerHTML = todoRows.join('')
        })
})



