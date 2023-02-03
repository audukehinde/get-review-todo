import './style.css';
import getFromLocalSTorage from './myLocalStorage.js';
import displayTodo from './displayTodo.js';
import newTodoForm from './todoForm.js';

window.addEventListener('load', () => {
  newTodoForm();
  const todos = getFromLocalSTorage();
  displayTodo(todos);
});
