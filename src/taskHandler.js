import task from "./task.js";
import Task from "./task.js";
import { createTaskCreationEl } from "./ui.js";
import { createTaskUi } from "./ui.js";
import { createAndPopulateDetailsModal } from "./ui.js";

export default function createTask() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const mainTasksContainer = document.querySelector(".main-tasks-container");
  const {
    taskModal,
    titleInput,
    descriptionInput,
    dueDateInput,
    highPriorityInput,
    highPriorityLabel,
    mediumPriorityInput,
    mediumPriorityLabel,
    lowPriorityInput,
    lowPriorityLabel,
    doneBtn,
  } = createTaskCreationEl();
  function handleAddTask() {
    taskModal.appendChild(titleInput);
    taskModal.appendChild(descriptionInput);
    taskModal.appendChild(dueDateInput);
    taskModal.appendChild(highPriorityInput);
    taskModal.appendChild(highPriorityLabel);
    taskModal.appendChild(mediumPriorityInput);
    taskModal.appendChild(mediumPriorityLabel);
    taskModal.appendChild(lowPriorityInput);
    taskModal.appendChild(lowPriorityLabel);
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
      if(document.querySelector('input[name="priority"]:checked') == null) {
        const priority = "None"
        const task = new Task(title, description, dueDate, priority, false);
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        return task;
      }
      else {
        const selectedPriority = document.querySelector('input[name="priority"]:checked')
        const priority = selectedPriority.value;
        const task = new Task(title, description, dueDate, priority, false);
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        selectedPriority.checked = false;
        return task;z
      }
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
          console.log(task.checked);
          console.log("No");
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
