import Task from "./task.js";
import {createInputAndButton} from "./ui.js"
import createTaskUi from "./ui.js";

export default function createTask() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const mainTasksContainer = document.querySelector(".main-tasks-container");
  const {titleInput , doneBtn} = createInputAndButton();

  
  function handleAddTask() {
    mainTasksContainer.appendChild(titleInput);
    mainTasksContainer.appendChild(doneBtn);
  }

  function handleDoneBtn() {
    const title = titleInput.value;
    if(!title) {
      alert("Title cannot be empty")
      return;
    }
    titleInput.value = "";
    titleInput.remove();
    doneBtn.remove();
    const task = new Task(title);
    createTaskUi(task);
  }

  addTaskBtn.addEventListener("click", handleAddTask);
  doneBtn.addEventListener("click", handleDoneBtn);
}