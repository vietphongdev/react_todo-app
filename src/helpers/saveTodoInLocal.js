export const saveTodoInLocal = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
