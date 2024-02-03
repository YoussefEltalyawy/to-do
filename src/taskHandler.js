import Task from "./task.js";
import { createTaskCreationEl } from "./ui.js";
import { createTaskUi } from "./ui.js";
import { createAndPopulateDetailsModal } from "./ui.js";
// import Intl from 'intl'

export default function createTask() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const mainTasksContainer = document.querySelector(".main-tasks-container");
  const { taskModal, titleInput, doneBtn, descriptionInput, dueDateInput } =
    createTaskCreationEl();
  function handleAddTask() {
    taskModal.appendChild(titleInput);
    taskModal.appendChild(descriptionInput);
    taskModal.appendChild(dueDateInput);
    taskModal.appendChild(doneBtn);
    mainTasksContainer.appendChild(taskModal);
    taskModal.showModal();
  }

  function createTaskFromInputs() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    if (!title) {
      alert("Please enter a title for the task.");
      return;
    } else if (title) {
      const task = new Task(title, description, dueDate, false);
      titleInput.value = "";
      descriptionInput.value = "";
      dueDateInput.value = "";
      return task;
    }
  }

  function handleDoneBtn() {
    const task = createTaskFromInputs();
    taskModal.close();
    if (task) {
      const { checkcircle, titleText, detailsBtn } = createTaskUi(task);

      function markCheckCircle() {
        if (task.checked == false) {
          checkcircle.setAttribute("name", "check-circle");
          checkcircle.setAttribute("color", "#808080");
          task.checked = true;
          titleText.classList.add("checked");
          console.log("Checked");
          detailsBtn.disabled = true;
          detailsBtn.classList.add("disabled");
        } else {
          return;
        }
      }

      checkcircle.addEventListener("click", markCheckCircle);
      detailsBtn.addEventListener("click", () => {
        createAndPopulateDetailsModal(task);
      });
    } else {
      return;
    }
  }
  addTaskBtn.addEventListener("click", handleAddTask);
  doneBtn.addEventListener("click", handleDoneBtn);
}
