import "boxicons";
const mainTasksContainer = document.querySelector(".main-tasks-container")
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
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done"; // Set button text here
  doneBtn.className = "done-btn";

  return { taskModal, titleInput, doneBtn, descriptionInput }; // Return both elements as an object
}

export function createTaskUi(task) {;
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

  const descriptionSpan = document.createElement("span");
  descriptionSpan.textContent = "Description: ";

  const descriptionH2 = document.createElement("h2");
  descriptionH2.appendChild(descriptionSpan);
  descriptionH2.appendChild(document.createTextNode(task.description));
  detailsModal.appendChild(descriptionH2);

  const closeModalBtn = document.createElement("box-icon");
  closeModalBtn.setAttribute("name", "x");
  closeModalBtn.className = "close-modal-btn";
  detailsModal.appendChild(closeModalBtn);
  detailsModal.showModal();
  closeModalBtn.addEventListener("click", () => {
    detailsModal.close();
  });
}
