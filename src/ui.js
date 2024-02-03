import "boxicons";
const mainTasksContainer = document.querySelector(".main-tasks-container");
export function createTaskCreationEl() {
  const taskModal = document.createElement("dialog");
  taskModal.className = " task-modal";
  const modalH1 = document.createElement("h1");
  modalH1.textContent = "Add Task Details:";
  taskModal.appendChild(modalH1);
  const titleInput = document.createElement("input");
  titleInput.setAttribute("placeholder", "Enter Title");
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("placeholder", "Enter Description");
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.className = "due-date-input";

  const highPriorityInput = document.createElement("input");
  highPriorityInput.type = "radio";
  highPriorityInput.id = "high-priority";
  highPriorityInput.name = "priority";
  highPriorityInput.value = "High";

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.textContent = "High"
  highPriorityLabel.setAttribute("for", "high-priority");

  const mediumPriorityInput = document.createElement("input");
  mediumPriorityInput.type = "radio";
  mediumPriorityInput.id = "medium-priority";
  mediumPriorityInput.name = "priority";
  mediumPriorityInput.value = "Medium";

  const mediumPriorityLabel = document.createElement("label");
  mediumPriorityLabel.textContent = "Medium"
  mediumPriorityLabel.setAttribute("for", "medium-priority");

  const lowPriorityInput = document.createElement("input");
  lowPriorityInput.type = "radio";
  lowPriorityInput.id = "low-priority";
  lowPriorityInput.name = "priority";
  lowPriorityInput.value = "Low";

  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.textContent = "Low"
  lowPriorityLabel.setAttribute("for", "low-priority");

  const selectedPriority = document.querySelector('input[name="priority"]:checked')

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done"; // Set button text here
  doneBtn.className = "done-btn";

  return {
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
  taskContainer.appendChild(checkcircle);
  taskContainer.appendChild(titleText);
  taskContainer.appendChild(detailsBtn);
  mainTasksContainer.appendChild(taskContainer);
  return { checkcircle, titleText, detailsBtn };
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
  priorityH2.appendChild(document.createTextNode(task.priority))
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
