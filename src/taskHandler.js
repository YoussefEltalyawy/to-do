import Task from "./task.js";
import { createTaskCreationEl } from "./ui.js";
import { createTaskUi } from "./ui.js";
import { createAndPopulateDetailsModal } from "./ui.js";
import { createProjectCreationEl } from "./ui.js";

export default function createTask() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  const mainTasksContainer = document.querySelector(".main-tasks-container");
  const {
    taskModal,
    titleH3,
    titleInput,
    descriptionH3,
    descriptionInput,
    dueDateH3,
    dueDateInput,
    priorityH3,
    highPriorityInput,
    highPriorityLabel,
    mediumPriorityInput,
    mediumPriorityLabel,
    lowPriorityInput,
    lowPriorityLabel,
    projectH3,
    projectInput,
    doneBtn,
  } = createTaskCreationEl();
  function handleAddTask() {
    taskModal.appendChild(titleH3);
    taskModal.appendChild(titleInput);
    taskModal.appendChild(descriptionH3);
    taskModal.appendChild(descriptionInput);
    taskModal.appendChild(dueDateH3)
    taskModal.appendChild(dueDateInput);
    taskModal.appendChild(priorityH3);
    taskModal.appendChild(highPriorityInput);
    taskModal.appendChild(highPriorityLabel);
    taskModal.appendChild(mediumPriorityInput);
    taskModal.appendChild(mediumPriorityLabel);
    taskModal.appendChild(lowPriorityInput);
    taskModal.appendChild(lowPriorityLabel);
    taskModal.appendChild(projectH3);
    taskModal.appendChild(projectInput);
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
      if (document.querySelector('input[name="priority"]:checked') == null) {
        const priority = "None";
        const task = new Task(title, description, dueDate, priority, false);
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        return task;
      } else {
        const selectedPriority = document.querySelector(
          'input[name="priority"]:checked'
        );
        const priority = selectedPriority.value;
        const task = new Task(title, description, dueDate, priority, false);
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        selectedPriority.checked = false;
        return task;
        z;
      }
    }
  }

  function handleDoneBtn() {
    const task = createTaskFromInputs();
    taskModal.close();
    if (task) {
      const { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer } =
        createTaskUi(task);

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

      function handleDeleteTask() {
        mainTasksContainer.removeChild(taskContainer);
      }

      checkcircle.addEventListener("click", markCheckCircle);
      detailsBtn.addEventListener("click", () => {
        createAndPopulateDetailsModal(task);
      });
      deleteBtn.addEventListener("click", handleDeleteTask);
    } else {
      return;
    }
  }
  addTaskBtn.addEventListener("click", handleAddTask);
  doneBtn.addEventListener("click", handleDoneBtn);
}
function ProjectHandler() {
  const nav = document.querySelector(".nav");
  const projectsArray = [];
  const addProjectBtn = document.querySelector(".new-project-btn");
  const {projectInputContainer, projectNameInput, submitProjectBtn} = createProjectCreationEl();
  function handleProjectCreation() {
    nav.appendChild(projectInputContainer);
  }
  addProjectBtn.addEventListener("click",handleProjectCreation);
  submitProjectBtn.addEventListener("click",() => {
    const projectName = projectNameInput.value;
    projectsArray.push(projectName)
    const projectH3 = document.createElement("h3");
    projectH3.textContent = projectName;
    nav.removeChild(projectInputContainer);
    nav.appendChild(projectH3);
    projectNameInput.value = "";
  });
}
ProjectHandler()