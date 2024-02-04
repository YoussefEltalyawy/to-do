export default class task {
  constructor(title, description, dueDate, priority, project, checked ) {
    this.description = description;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.checked = checked;
  }
}
