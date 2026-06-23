const btn = document.getElementById("addBtn");

btn.addEventListener("click", function addTask() {
  const task = document.getElementById("task").value;
  console.log(task);

  if (task.trim() === "") {
    alert("Please enter a task");
  } else {
    document.getElementById("noTask").hidden = true;
    const li = document.createElement("li");

    // createing a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    console.log(checkbox);

    // writing the task content into a span tag
    const taskText = document.createElement("span");
    taskText.textContent = task;
    console.log(taskText);

    // creating a image for deleteing the task
    const deleteTask = document.createElement("img");
    deleteTask.src = "https://cdn-icons-png.flaticon.com/128/9790/9790368.png";
    console.log(deleteTask);

    // adding all the 3 elemenst into a list item
    li.append(checkbox, taskText, deleteTask);

    // this  creates a class so thet you can target it and style it
    li.setAttribute("class", "userTask");

    // adding the list into the list of the html
    const TaskList = document.getElementById("taskList");
    TaskList.append(li);

    //this resets the input flied
    document.getElementById("task").value = "";

    //function to delete the list Item
    deleteTask.addEventListener("click", function () {
      this.closest("li").remove();
    });
  }
});
