const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");

const todoContainer = document.querySelector(".todo-container");
const todoList = todoContainer.querySelector("#todo-list");
const toDoCount = todoContainer.querySelector("#todo-count");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function loadTodos() {
  let loadedTodos = localStorage.getItem(TODOS_KEY);
  // 만약 로드해 온 todo들이 졵대한다면
  if (loadedTodos) {
    const parsedTodos = JSON.parse(loadedTodos);
    // 실제로 todo를 추가
    parsedTodos.forEach((element) => {
      addTodo(element);
    });
    todos = parsedTodos;
    updateTodoCount();
  }
}

function addTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const todo = document.createElement("span");

  todo.innerText = newTodoObj.text;
  li.appendChild(todo);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✖";
  deleteBtn.addEventListener("click", deleteTodo);

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  const id = parseInt(li.id);
  // console.log("id:", id);

  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  li.remove();

  updateTodoCount();
}

function updateTodoCount() {
  toDoCount.innerText = todos.length;
}

function handleTodoSubmit(event) {
  event.preventDefault();

  if (todos.length > 9) {
    alert("You have too many todos!");
    return;
  }

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  saveTodos();
  addTodo(newTodoObj);

  updateTodoCount();
}

todoForm.addEventListener("submit", handleTodoSubmit);
loadTodos();
