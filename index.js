// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

// Function to remove the last task
function removeTask() {
  var taskList = document.getElementById("taskList");
  var lastTask = taskList.lastElementChild;

  if (lastTask) {
    taskList.removeChild(lastTask);
  }
}

// Event listener for the Add Task button
document.getElementById("addButton").addEventListener("click", addTask);

// Event listener for the Remove Task button
document.getElementById("removeButton").addEventListener("click", removeTask);
