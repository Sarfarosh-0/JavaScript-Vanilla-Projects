const themeToggle = document.getElementById("themeBtn");
const htmlElement = document.documentElement;
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
});

const btn = document.getElementById("addBtn");

btn.addEventListener("click", function addTask() {
  const userTask = document.getElementById("task").value;

  if (userTask.trim() === "") {
    alert("First enter a task");
  } else {
    const task = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("p");
    taskText.textContent = userTask;

    const deleteTask = document.createElement("img");
    deleteTask.src = "https://cdn-icons-png.flaticon.com/128/9790/9790368.png";

    // adding all the 3 elemenst into a div
    task.append(checkbox, taskText, deleteTask);

    // this  creates a class so thet you can target it and style it
    task.setAttribute("class", "task");

    // adding the list into the list of the html
    const Tasks = document.getElementById("Tasks");
    Tasks.appendChild(task);

    countTask();

    document.getElementById("task").value = "";

    deleteTask.addEventListener("click", function () {
      this.closest("div").remove();

      countTask();
    });
  }
});

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
