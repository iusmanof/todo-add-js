function createTodoItem(title){
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.innerText = 'Изменить';
    editButton.className = 'edit';
}

function addTodoItem(event){
    event.preventDefault(); // Остановить отправку данные на сервер

    if(addInput.value === '') return alert('Необходимо ввсети название задачи')

    const listItem = createTodoItem(addInput.value);


}

const todoForm = document.getElementById('todo-form')
const todoForm = document.getElementById('todo-form')
const addInput = document.getElementById('add-input')
const todoList = document.querySelectorAll('.todo-item')

todoForm.addEventListener('submit', addTodoItem);
