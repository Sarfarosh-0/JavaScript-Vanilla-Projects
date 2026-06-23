const themeToggle = document.getElementById("themeBtn");
const themeImage = document.getElementById("themeImage");
const htmlElement = document.documentElement;
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    themeImage.src =
      "https://cdn-icons-png.flaticon.com/128/10480/10480655.png";
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.setAttribute("data-theme", "light");
    themeImage.src = "https://cdn-icons-png.flaticon.com/128/7549/7549325.png";
  }
});

let toDoList = JSON.parse(localStorage.getItem("myTasks")) || [];

function renderTasks() {
  const tasksContainer = document.getElementById("Tasks");
  tasksContainer.innerHTML = "";

  toDoList.forEach((taskItem, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskItem.completed;

    checkbox.addEventListener("change", () => {
      toDoList[index].completed = checkbox.checked;
      saveData();
      countTask();
    });

    const p = document.createElement("p");
    p.textContent = taskItem.text;

    const delImg = document.createElement("img");
    delImg.src = "https://cdn-icons-png.flaticon.com/128/9790/9790368.png";

    delImg.addEventListener("click", () => {
      toDoList.splice(index, 1);
      saveData();
      renderTasks();
    });

    taskDiv.append(checkbox, p, delImg);
    tasksContainer.appendChild(taskDiv);
  });
  countTask();
}

document.getElementById("addBtn").addEventListener("click", addTask);
function addTask() {
  const input = document.getElementById("task");
  if (input.value.trim() === "") return;

  toDoList.push({ text: input.value, completed: false });
  saveData();
  renderTasks();
  input.value = "";
}

document.getElementById("handelEnter").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function saveData() {
  localStorage.setItem("myTasks", JSON.stringify(toDoList));
}

renderTasks();

const completedTask = document.getElementById("completedTask");
completedTask.addEventListener("click", selectCompletedTask);
function selectCompletedTask() {
  const tasksList = document.querySelectorAll(".task");
  tasksList.forEach((element) => {
    const checkbox = element.querySelector("input");
    if (checkbox.checked) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
  countTask();
}

const activeTask = document.getElementById("activeTask");
activeTask.addEventListener("click", selectActiveTask);
function selectActiveTask() {
  const tasksList = document.querySelectorAll(".task");
  tasksList.forEach((element) => {
    const checkbox = element.querySelector("input");
    if (checkbox.checked) {
      element.classList.add("hidden");
      countTask();
    } else {
      element.classList.remove("hidden");
    }
  });
  countTask();
}

const allTask = document.getElementById("allTask");
allTask.addEventListener("click", selectAllTask);
function selectAllTask() {
  const tasksList = document.querySelectorAll(".task");

  tasksList.forEach((element) => {
    const checkbox = element.querySelector("input");
    element.classList.remove("hidden");
  });
  countTask();
}

function countTask() {
  const Tasks = document.getElementById("Tasks");
  const totalTasks = Tasks.querySelectorAll(".task:not(.hidden)").length;

  document.getElementById("totalTask").textContent = totalTasks + " Tasks";
}

const filterButtons = document.querySelectorAll(".list span");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});
