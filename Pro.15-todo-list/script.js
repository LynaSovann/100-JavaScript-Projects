const addButton = document.getElementById("btn-add");
const formElement = document.getElementById("form");
const tasksElement = document.getElementById("tasks");
const inputElement = document.getElementById("input");

addButton.addEventListener("click", addTask);

formElement.addEventListener("submit", (e) => submitForm(e));

function submitForm(e) {
  e.preventDefault();

  const taskEl = document.createElement("div");
  taskEl.classList.add("task");

  const titleEl = document.createElement("div");
  titleEl.classList.add("title");

  const pEl = document.createElement("input");
  pEl.setAttribute("readonly", "true");
  pEl.classList.add("text-container");
  pEl.value = inputElement.value;

  titleEl.appendChild(pEl);

  const buttonEl = document.createElement("div");
  buttonEl.classList.add("btn");

  const btnUpdate = document.createElement("button");
  btnUpdate.setAttribute("id", "btn-update");
  btnUpdate.innerText = "Update";

  btnUpdate.addEventListener("click", (e) => {
    if (btnUpdate.innerText === "Update") {
      pEl.removeAttribute("readonly");
      pEl.focus();
      pEl.classList.add("write-input");
      btnUpdate.innerText = "Save";
    } else {
      pEl.setAttribute("readonly", "true");
      pEl.classList.remove("write-input");
      btnUpdate.innerText = "Update";
    }
  });

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("id", "btn-delete");
  btnDelete.innerText = "Delete";

  btnDelete.addEventListener("click", () => {
    tasksElement.removeChild(taskEl);
  });

  buttonEl.appendChild(btnUpdate);
  buttonEl.appendChild(btnDelete);

  taskEl.appendChild(titleEl);
  taskEl.appendChild(buttonEl);

  tasksElement.appendChild(taskEl);

  inputElement.value = "";
}

function addTask() {
  addButton.classList.add("hide");
  formElement.classList.remove("hide");
  inputElement.focus();
}
