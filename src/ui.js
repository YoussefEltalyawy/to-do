import "boxicons";
export function createTaskCreationEl() {
  const taskModal = document.createElement("dialog");
  taskModal.className = " task-modal";
  const modalH1 = document.createElement("h1");
  modalH1.textContent = "Add Task Details:";
  taskModal.appendChild(modalH1);
  const titleInput = document.createElement("input");
  titleInput.setAttribute("placeholder", "Enter Title")
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("placeholder", "Enter Description")
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done"; // Set button text here
  doneBtn.className = "done-btn"

  return { taskModal, titleInput, doneBtn, descriptionInput }; // Return both elements as an object
}

export default function createTaskUi(task) {
  const mainTasksContainer = document.querySelector(".main-tasks-container");
  const taskContainer = document.createElement("div");
  taskContainer.className = "task-container";
  const checkcircle = document.createElement("box-icon");
  checkcircle.setAttribute("name", "circle");
  checkcircle.className = "check-circle";
  const titleText = document.createElement("p");
  titleText.className = "title";
  titleText.textContent = task.title;
  const detailsBtn = document.createElement("button")
  detailsBtn.textContent = "Details"
  detailsBtn.className = "details-btn";
  taskContainer.appendChild(checkcircle);
  taskContainer.appendChild(titleText);
  taskContainer.appendChild(detailsBtn);
  mainTasksContainer.appendChild(taskContainer);
  return { checkcircle, titleText, detailsBtn };
}
