import "boxicons";
export function createInputAndButton() {
  const titleInput = document.createElement("input");
  titleInput.style.border = 'none';
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done"; // Set button text here

  return { titleInput, doneBtn }; // Return both elements as an object
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
  taskContainer.appendChild(checkcircle);
  taskContainer.appendChild(titleText);
  mainTasksContainer.appendChild(taskContainer);
  return {checkcircle , titleText};
}
