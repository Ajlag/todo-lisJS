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

  checkBtn = document.createElement("button");
  checkBtn.className = "checkBtn";
  i = document.createElement("i");
  ic = document.createElement("i");

  ic.className = "fa-solid fa-check";
  i.className = "fas fa-trash";
  deleteButt.appendChild(i);
  checkBtn.appendChild(ic);
  divGroup.appendChild(li);
  divGroup.appendChild(checkBtn);
  divGroup.appendChild(deleteButt);
  input.value = "";

  deleteButt.addEventListener("click", (e) => {
    const item = e.target;
    const todo = item.parentElement;
    const brisi = todo.parentElement;
    brisi.remove();
  });

  checkBtn.addEventListener("click", (e) => {
    const item = e.target;
    const todo = item.parentElement;
    const precrtaj = todo.parentElement;
    precrtaj.style.textDecoration = "line-through";
    precrtaj.style.color = "gray";
  });
});
