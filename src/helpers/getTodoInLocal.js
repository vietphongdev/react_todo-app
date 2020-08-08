export const getTodoInLocal = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  return todos;
};
