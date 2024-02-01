import Task from "./task.js";
import { createTaskCreationEl } from "./ui.js";
import createTaskUi from "./ui.js";

export default function createTask() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const mainTasksContainer = document.querySelector(".main-tasks-container");
  const { taskModal, titleInput, doneBtn, descriptionInput } = createTaskCreationEl();
  function handleAddTask() {
    taskModal.appendChild(titleInput);
    taskModal.appendChild(descriptionInput);
    taskModal.appendChild(doneBtn);
    mainTasksContainer.appendChild(taskModal);
    taskModal.showModal();
  }
  function handleDoneBtn() {
    taskModal.close();
    const title = titleInput.value;
    const description = descriptionInput.value;
    if (!title) {
      alert("Title cannot be empty");
      return;
    }
    titleInput.value = "";
    descriptionInput.value = "";
    const task = new Task(title, description, false);
    console.log(task.description)
    const { checkcircle, titleText } = createTaskUi(task);

    function markCheckCircle() {
      if (task.checked == false) {
        checkcircle.setAttribute("name", "check-circle");
        checkcircle.setAttribute("color", "#808080");
        task.checked = true;
        titleText.classList.add("checked");
        console.log("Checked");
      } else {
        return;
      }
    }
    
    checkcircle.addEventListener("click", markCheckCircle);
  }
  addTaskBtn.addEventListener("click", handleAddTask);
  doneBtn.addEventListener("click", handleDoneBtn);
}
