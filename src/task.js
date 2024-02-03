export default class task {
  constructor(title, description, dueDate, priority, checked ) {
    this.description = description;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
  }
}
