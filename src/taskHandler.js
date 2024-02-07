import Task from './task.js';
import { createTaskCreationEl, createTaskUi, createAndPopulateDetailsModal, createProjectCreationEl } from './ui.js';

const mainTasksContainer = document.querySelector('.main-tasks-container');
let tasksArr;
let projectsArr;
if (!getTasksDataInLocalStorage()) {
  tasksArr = [];
} else {
  tasksArr = JSON.parse(getTasksDataInLocalStorage());
  tasksArr.forEach(function (task) {
    const { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer } =
      createTaskUi(task);
    if (task.checked === true) {
      markCheckCircle(checkcircle, task, titleText, detailsBtn);
    } 
    checkcircle.addEventListener('click', () => {
      markCheckCircle(checkcircle, task, titleText, detailsBtn);
    });
    detailsBtn.addEventListener('click', () => {
      createAndPopulateDetailsModal(task);
    });
    deleteBtn.addEventListener('click', () => {
      handleDeleteTask(task, taskContainer);
    });
  });
}

if (!getProjectsDataInLocalStorage()) {
  projectsArr = [];
} else {
  projectsArr = JSON.parse(getProjectsDataInLocalStorage());
  projectsArr.forEach(function (project) {
    const projectName = project;
    const projectH3 = document.createElement('h3');
    const nav = document.querySelector('.nav');
    const inbox = document.querySelector('.inbox');
    projectH3.textContent = project;
    nav.appendChild(projectH3);
    projectH3.addEventListener('click', () => {
      mainTasksContainer.innerHTML = '';
      tasksArr.forEach((task) => {
        if (task.project === projectName) {
          const {
            checkcircle,
            titleText,
            detailsBtn,
            deleteBtn,
            taskContainer
          } = createTaskUi(task);
          if (task.checked === true) {
            markCheckCircle(checkcircle, task, titleText, detailsBtn);
          }
          detailsBtn.addEventListener('click', () => {
            createAndPopulateDetailsModal(task);
          });
          deleteBtn.addEventListener('click', () => {
            handleDeleteTask(task, taskContainer);
          });
        }
      });
    });
    inbox.addEventListener('click', () => {
      mainTasksContainer.innerHTML = '';
      console.log("here")
      tasksArr.forEach((task) => {
        const { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer } =
          createTaskUi(task);
        if (task.checked === true) {
          markCheckCircle(checkcircle, task, titleText, detailsBtn);
        } else {
          return;
        }
        detailsBtn.addEventListener('click', () => {
          createAndPopulateDetailsModal(task);
        });
        deleteBtn.addEventListener('click', () => {
          handleDeleteTask(task, taskContainer);
        });
      });
    });
  });
}

export default function handleTasksAndProjects () {
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
    doneBtn
  } = createTaskCreationEl();
  const addTaskBtn = document.querySelector('.add-task-btn');

  function projectHandler () {
    const nav = document.querySelector('.nav');
    const inbox = document.querySelector('.inbox');
    const addProjectBtn = document.querySelector('.new-project-btn');
    const { projectInputContainer, projectNameInput, submitProjectBtn } =
      createProjectCreationEl();
    function handleProjectCreation () {
      nav.appendChild(projectInputContainer);
    }
    addProjectBtn.addEventListener('click', handleProjectCreation);
    submitProjectBtn.addEventListener('click', () => {
      const projectName = projectNameInput.value;
      const projectH3 = document.createElement('h3');
      projectH3.textContent = projectName;
      nav.removeChild(projectInputContainer);
      nav.appendChild(projectH3);
      projectsArr.push(projectName);
      saveProjectsDataInLocalStorage();
      projectNameInput.value = '';
      const newOption = document.createElement('option');
      newOption.textContent = projectName;
      projectInput.appendChild(newOption);
      projectH3.addEventListener('click', () => {
        mainTasksContainer.innerHTML = '';
        tasksArr.forEach((task) => {
          if (task.project === projectName) {
            const {
              checkcircle,
              titleText,
              detailsBtn,
              deleteBtn,
              taskContainer
            } = createTaskUi(task);
            if (task.checked === true) {
              markCheckCircle(checkcircle, task, titleText, detailsBtn);
            }
            detailsBtn.addEventListener('click', () => {
              createAndPopulateDetailsModal(task);
            });
            deleteBtn.addEventListener('click', () => {
              handleDeleteTask(task, taskContainer);
            });
          }
        });
      });
      inbox.addEventListener('click', () => {
        mainTasksContainer.innerHTML = '';
        tasksArr.forEach((task) => {
          const {
            checkcircle,
            titleText,
            detailsBtn,
            deleteBtn,
            taskContainer
          } = createTaskUi(task);
          if (task.checked === true) {
            markCheckCircle(checkcircle, task, titleText, detailsBtn);
          } else {
            return;
          }
          detailsBtn.addEventListener('click', () => {
            createAndPopulateDetailsModal(task);
          });
          deleteBtn.addEventListener('click', () => {
            handleDeleteTask(task, taskContainer);
          });
        });
      });
    });
  }
  projectHandler();

  function handleAddTask () {
    taskModal.appendChild(titleH3);
    taskModal.appendChild(titleInput);
    taskModal.appendChild(descriptionH3);
    taskModal.appendChild(descriptionInput);
    taskModal.appendChild(dueDateH3);
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
  addTaskBtn.addEventListener('click', handleAddTask);

  function createTaskFromInputs () {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const project = projectInput.value;
    if (!title) {
      alert('Please enter a title for the task.');
    } else if (title) {
      if (document.querySelector('input[name="priority"]:checked') == null) {
        const priority = 'None';
        const task = new Task(
          title,
          description,
          dueDate,
          priority,
          project,
          false
        );
        tasksArr.push(task);
        saveTasksDataInLocalStorage();
        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        projectInput.value = '';
        return task;
      } else {
        const selectedPriority = document.querySelector(
          'input[name="priority"]:checked'
        );
        const priority = selectedPriority.value;
        const task = new Task(
          title,
          description,
          dueDate,
          priority,
          project,
          false
        );
        tasksArr.push(task);
        saveTasksDataInLocalStorage();
        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        selectedPriority.checked = false;
        projectInput.value = '';
        return task;
      }
    }
  }
  function handleDoneBtn () {
    const task = createTaskFromInputs();
    taskModal.close();
    if (task) {
      const { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer } =
        createTaskUi(task);

      checkcircle.addEventListener('click', () => {
        markCheckCircle(checkcircle, task, titleText, detailsBtn);
      });
      detailsBtn.addEventListener('click', () => {
        createAndPopulateDetailsModal(task);
      });
      deleteBtn.addEventListener('click', () => {
        handleDeleteTask(task, taskContainer);
      });
    } else {

    }
  }

  doneBtn.addEventListener('click', handleDoneBtn);
}
function markCheckCircle (checkcircle, task, titleText, detailsBtn) {
  checkcircle.setAttribute('name', 'check-circle');
  checkcircle.setAttribute('color', '#808080');
  task.checked = true;
  titleText.classList.add('checked');
  detailsBtn.disabled = true;
  detailsBtn.classList.add('disabled');
  saveTasksDataInLocalStorage();
}

function handleDeleteTask (task, taskContainer) {
  mainTasksContainer.removeChild(taskContainer);
  const taskIndex = tasksArr.indexOf(task);
  tasksArr.splice(taskIndex, 1);
  saveTasksDataInLocalStorage();
}

export function saveTasksDataInLocalStorage () {
  localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
}

function saveProjectsDataInLocalStorage () {
  localStorage.setItem('projectsArr', JSON.stringify(projectsArr));
}

function getTasksDataInLocalStorage () {
  return localStorage.getItem('tasksArr');
}

function getProjectsDataInLocalStorage () {
  return localStorage.getItem('projectsArr');
}
