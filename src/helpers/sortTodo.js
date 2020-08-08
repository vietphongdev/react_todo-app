export const sortTodoByDate = (todos, sortBy = 'dueDate') => {
  if (Array.isArray(todos) && todos.length > 1) {
    const newTodos = todos.sort((a, b) => {
      return new Date(a[sortBy]) - new Date(b[sortBy]);
    });
    return newTodos;
  }
  return todos;
};
