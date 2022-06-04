
// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove event
  taskList.addEventListener("click", removeTask);
};

// Add Task
function addTask(e) {
  e.preventDefault();

  const listItems = document.querySelectorAll(".collection .collection-item");
  if (taskInput.value === "") {
    alert("Please Add a task");
  } else {
    if (listItems.length === 0) {
      // Create li element
      const li = document.createElement("li");
      // Add class
      li.className = "collection-item";
      // Create text node and append to li
      li.appendChild(document.createTextNode(taskInput.value));
      // Create new link element
      const link = document.createElement("a");
      // Add class
      link.className = "delete-item secondary-content";

      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Append the link to li
      li.appendChild(link);

      // Append li to ul
      taskList.appendChild(li);
    } else {
      // test same name
      let existOrNot = null;
      listItems.forEach((value) => {
        if (value.textContent === taskInput.value) {
          existOrNot = true;
        } else {
          existOrNot = false;
        }
      });
      // if same name then popup this
      if (existOrNot) {
        alert("already added");
      } else {
        // Create li element
        const li = document.createElement("li");
        // Add class
        li.className = "collection-item";
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement("a");
        // Add class
        link.className = "delete-item secondary-content";

        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
      }
    }
  }

}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}