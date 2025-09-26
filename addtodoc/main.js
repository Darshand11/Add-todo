const todoInput = document.getElementById("todo-input");
const todosParent = document.getElementById("todos");

function addTodo() {
  const div = document.createElement("div");
  const para = document.createElement("p");
  const button = document.createElement("button");

  button.innerText = "Delete";
  para.innerText = todoInput.value;

  div.append(para, button);

  todosParent.appendChild(div);
}
function delettodo(){
    const el = document.getElementById(todoId);
    el.remove();

}