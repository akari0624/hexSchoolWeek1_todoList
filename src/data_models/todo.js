class Todo {
  constructor(
    desc = '',
    file = '',
    deadline = 11111111111,
    todoText = '',
    highlighted = false,
    comment = '',
    isComplete = false
  ) {
    this.desc = desc;
    this.file = file;
    this.deadline = deadline;
    this.todoText = todoText;
    this.highlighted = highlighted;
    this.comment = comment;
    this.isComplete = isComplete;
  }
}

export default Todo