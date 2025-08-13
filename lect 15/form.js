
const todoForm = document.querySelector(".todoform");
const todoList = document.querySelector(".todolist");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();


  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("duedate").value;
  const priority = document.getElementById("priority").value;

  if (!title) {
    alert("Todo title is required!");
    return;
  }


  const li = document.createElement("li");
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${title}</h3>
    <p>Description: ${description || "No description"}</p>
    <p>Due Date: ${dueDate || "No date set"}</p>
    <p>Priority: ${priority}</p>
  `;

  li.appendChild(div);
  todoList.appendChild(li);

  todoForm.reset();
});
