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
let currentFilter = "all";

function renderTasks() {
  const tasksContainer = document.getElementById("Tasks");
  tasksContainer.innerHTML = "";

  toDoList.forEach((taskItem, index) => {
    if (currentFilter === "active" && taskItem.completed) return;
    if (currentFilter === "completed" && !taskItem.completed) return;

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskItem.completed;

    checkbox.addEventListener("change", () => {
      toDoList[index].completed = checkbox.checked;
      saveData();
      renderTasks();
    });

    const p = document.createElement("p");
    p.textContent = taskItem.text;
    if (taskItem.completed) {
      p.style.textDecoration = "line-through";
    }

    const delImg = document.createElement("img");
    delImg.src = "https://cdn-icons-png.flaticon.com/128/9790/9790368.png";
    delImg.style.cursor = "pointer";

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

document.getElementById("task").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function saveData() {
  localStorage.setItem("myTasks", JSON.stringify(toDoList));
}

const completedTask = document.getElementById("completedTask");
completedTask.addEventListener("click", () => {
  currentFilter = "completed";
  updateFilterUI(completedTask);
});

const activeTask = document.getElementById("activeTask");
activeTask.addEventListener("click", () => {
  currentFilter = "active";
  updateFilterUI(activeTask);
});

const allTask = document.getElementById("allTask");
allTask.addEventListener("click", () => {
  currentFilter = "all";
  updateFilterUI(allTask);
});

function updateFilterUI(selectedButton) {
  const filterButtons = document.querySelectorAll(".list span");
  filterButtons.forEach((btn) => btn.classList.remove("selected"));
  selectedButton.classList.add("selected");
  renderTasks();
}

function countTask() {
  const activeCount = toDoList.filter((task) => !task.completed).length;
  document.getElementById("totalTask").textContent =
    activeCount + " Items Left";
}

// Initial Run
renderTasks();
