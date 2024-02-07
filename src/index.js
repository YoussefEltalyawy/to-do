import handleTasksAndProjects from "./taskHandler";
import saveTasksDataInLocalStorage from "./taskHandler"
if (!localStorage.getItem('tasksArr')) {
  saveTasksDataInLocalStorage();
  console.log("yes!")
}
else {
  handleTasksAndProjects();
  console.log("else")
}