import handleTasksAndProjects from "./taskHandler";
import saveDataInLocalStorage from "./taskHandler"
if (!localStorage.getItem('tasksArr')) {
  saveDataInLocalStorage();
  console.log("yes!")
}
else {
  handleTasksAndProjects();
  console.log("else")
}