import "boxicons";
const mainTasksContainer = document.querySelector(".main-tasks-container");
export function createTaskCreationEl() {
  const taskModal = document.createElement("dialog");
  taskModal.className = " task-modal";
  const modalH1 = document.createElement("h1");
  modalH1.textContent = "Add Task Details:";
  taskModal.appendChild(modalH1);

  const titleH3 = document.createElement("h3");
  titleH3.textContent = "Title:";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("placeholder", "Enter Title");

  const descriptionH3 = document.createElement("h3");
  descriptionH3.textContent = "Description:";
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("placeholder", "Enter Description");

  const dueDateH3 = document.createElement("h3");
  dueDateH3.textContent = "Due Date:";
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.className = "due-date-input";

  const priorityH3 = document.createElement("h3");
  priorityH3.textContent = "Priority:";
  const highPriorityInput = document.createElement("input");
  highPriorityInput.type = "radio";
  highPriorityInput.id = "high-priority";
  highPriorityInput.name = "priority";
  highPriorityInput.value = "High";

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.textContent = "High";
  highPriorityLabel.setAttribute("for", "high-priority");

  const mediumPriorityInput = document.createElement("input");
  mediumPriorityInput.type = "radio";
  mediumPriorityInput.id = "medium-priority";
  mediumPriorityInput.name = "priority";
  mediumPriorityInput.value = "Medium";

  const mediumPriorityLabel = document.createElement("label");
  mediumPriorityLabel.textContent = "Medium";
  mediumPriorityLabel.setAttribute("for", "medium-priority");

  const lowPriorityInput = document.createElement("input");
  lowPriorityInput.type = "radio";
  lowPriorityInput.id = "low-priority";
  lowPriorityInput.name = "priority";
  lowPriorityInput.value = "Low";

  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.textContent = "Low";
  lowPriorityLabel.setAttribute("for", "low-priority");

  const projectH3 = document.createElement("h3");
  projectH3.textContent = "Project: ";
  const projectInput = document.createElement("select");
  projectInput.name = "projects";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done"; // Set button text here
  doneBtn.className = "done-btn";

  return {
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
  };
}

export function createTaskUi(task) {
  const taskContainer = document.createElement("div");
  taskContainer.className = "task-container";
  const checkcircle = document.createElement("box-icon");
  checkcircle.setAttribute("name", "circle");
  checkcircle.className = "check-circle";
  const titleText = document.createElement("p");
  titleText.className = "title";
  titleText.textContent = task.title;
  const detailsBtn = document.createElement("button");
  detailsBtn.textContent = "Details";
  detailsBtn.className = "details-btn";
  const deleteBtn = document.createElement("box-icon");
  deleteBtn.setAttribute("name", "trash");
  deleteBtn.className = "delete-btn";
  taskContainer.appendChild(checkcircle);
  taskContainer.appendChild(titleText);
  taskContainer.appendChild(detailsBtn);
  taskContainer.appendChild(deleteBtn);
  mainTasksContainer.appendChild(taskContainer);
  taskContainer.addEventListener("mouseover", () => {
    deleteBtn.classList.add("visible");
    console.log("shown");
  });
  taskContainer.addEventListener("mouseout", () => {
    deleteBtn.classList.remove("visible");
    console.log("hidden");
  });
  return { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer };
}

export function createAndPopulateDetailsModal(task) {
  const detailsModal = document.createElement("dialog");
  detailsModal.className = "details-modal";
  mainTasksContainer.appendChild(detailsModal);

  const header = document.createElement("h1");
  header.textContent = "Details:";
  detailsModal.appendChild(header);

  const titleSpan = document.createElement("span");
  titleSpan.textContent = "Title: ";

  const titleH2 = document.createElement("h2");
  titleH2.appendChild(titleSpan); // Append the span to the h2 element
  titleH2.appendChild(document.createTextNode(task.title)); // Append the task title
  detailsModal.appendChild(titleH2);

  if (task.description) {
    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = "Description: ";

    const descriptionH2 = document.createElement("h2");
    descriptionH2.appendChild(descriptionSpan);
    descriptionH2.appendChild(document.createTextNode(task.description));
    detailsModal.appendChild(descriptionH2);
  } else {
    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = "Description: ";

    const descriptionH2 = document.createElement("h2");
    descriptionH2.appendChild(descriptionSpan);
    descriptionH2.appendChild(document.createTextNode("None"));
    detailsModal.appendChild(descriptionH2);
  }

  if (task.dueDate) {
    const formattedDueDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(task.dueDate));

    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = "Due Date: ";
    const dueDateH2 = document.createElement("h2");
    dueDateH2.appendChild(dueDateSpan);
    dueDateH2.appendChild(document.createTextNode(formattedDueDate));
    detailsModal.appendChild(dueDateH2);
  } else {
    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = "Due Date: ";
    const dueDateH2 = document.createElement("h2");
    dueDateH2.appendChild(dueDateSpan);
    dueDateH2.appendChild(document.createTextNode("None"));
    detailsModal.appendChild(dueDateH2);
  }

  const prioritySpan = document.createElement("span");
  prioritySpan.textContent = "Priority: ";
  const priorityH2 = document.createElement("h2");
  priorityH2.appendChild(prioritySpan);
  priorityH2.appendChild(document.createTextNode(task.priority));
  detailsModal.appendChild(priorityH2);

  const closeModalBtn = document.createElement("box-icon");
  closeModalBtn.setAttribute("name", "x");
  closeModalBtn.className = "close-modal-btn";
  detailsModal.appendChild(closeModalBtn);
  detailsModal.showModal();
  closeModalBtn.addEventListener("click", () => {
    detailsModal.close();
  });
}
export function createProjectCreationEl() {
  const projectInputContainer = document.createElement("div");
  projectInputContainer.className = "project-input-container";
  const projectNameInput = document.createElement("input");
  projectNameInput.className = "project-name-input";
  projectNameInput.placeholder = "Project Name...";
  const submitProjectBtn = document.createElement("box-icon");
  submitProjectBtn.setAttribute("name", "check");
  submitProjectBtn.setAttribute("color", "#ffff");
  submitProjectBtn.className = "submit-project-btn";
  projectInputContainer.appendChild(projectNameInput);
  projectInputContainer.appendChild(submitProjectBtn)
  return { projectInputContainer, projectNameInput, submitProjectBtn };
}
