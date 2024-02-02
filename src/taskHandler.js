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
  
  function createTaskFromInputs() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    if (!title) {
      alert("Title cannot be empty");
      return;
    }
    const task = new Task(title, description, false);
    titleInput.value = "";
    descriptionInput.value = "";
    return task;
  }

  function handleDoneBtn() {
    const task = createTaskFromInputs();
    taskModal.close();
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
      const detailsModal = document.createElement("dialog");
      detailsModal.className = "details-modal";
      mainTasksContainer.appendChild(detailsModal);

      const header = document.createElement("h1");
      header.textContent = "Details:";
      detailsModal.appendChild(header);

      // Create a span for the "Title:" text with a different color
      const titleSpan = document.createElement("span");
      titleSpan.textContent = "Title: ";

      const titleH2 = document.createElement("h2");
      titleH2.appendChild(titleSpan); // Append the span to the h2 element
      titleH2.appendChild(document.createTextNode(task.title)); // Append the task title
      detailsModal.appendChild(titleH2);

      const descriptionSpan = document.createElement("span");
      descriptionSpan.textContent = "Description: ";

      const descriptionH2 = document.createElement("h2");
      descriptionH2.appendChild(descriptionSpan);
      descriptionH2.appendChild(document.createTextNode(task.description));
      detailsModal.appendChild(descriptionH2);

      const closeModalBtn = document.createElement("box-icon");
      closeModalBtn.setAttribute("name", "x");
      closeModalBtn.className = "close-modal-btn";
      detailsModal.appendChild(closeModalBtn)
      detailsModal.showModal();
      closeModalBtn.addEventListener("click", () => {
        detailsModal.close();
      });
    });
  }
  addTaskBtn.addEventListener("click", handleAddTask);
  doneBtn.addEventListener("click", handleDoneBtn);
}
