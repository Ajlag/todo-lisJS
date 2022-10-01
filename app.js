input = document.getElementById("inputTodo");
button = document.getElementById("submit");
ul = document.getElementById("list");

button.addEventListener("click", () => {
  divGroup = document.createElement("div");
  divGroup.className = "group";
  ul.appendChild(divGroup);

  li = document.createElement("p");
  li.className = "item";
  li.innerText = input.value;

  deleteButt = document.createElement("button");
  deleteButt.className = "deleteBtn";

  i = document.createElement("i");
  i.className = "fas fa-trash";
  deleteButt.appendChild(i);
  divGroup.appendChild(li);
  divGroup.appendChild(deleteButt);
  input.value = "";

  deleteButt.addEventListener("click", (e) => {
    const item = e.target;
    const todo = item.parentElement;
    const brisi = todo.parentElement;
    brisi.remove();
  });
});
