export function createInputAndButton() {
  const titleInput = document.createElement("input");
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done"; // Set button text here

  return { titleInput, doneBtn }; // Return both elements as an object
}

export default function createTaskUi(task) {
  const taskContainer = document.querySelector(".task-container");
  const titleText = document.createElement("p");
  titleText.textContent = task.title;
  taskContainer.appendChild(titleText);
}
