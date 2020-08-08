import {
  ADD_TODO,
  UPDATE_TODO,
  SEARCHING,
  SEARCH_TODO,
  CLEAR_SEARCH,
  REMOVE_TODO,
  REMOVE_TODO_SELECTEDS,
} from '../actions/types';
import { sortTodoByDate } from '../../helpers/sortTodo';
import { saveTodoInLocal } from '../../helpers/saveTodoInLocal';
import { getTodoInLocal } from '../../helpers/getTodoInLocal';
import { successNotification } from '../../helpers/notification';
import { messages } from '../../constants/messages';

const todoInLocalStorage = getTodoInLocal();
const todos = sortTodoByDate(todoInLocalStorage);

const initialState = {
  todos,
  searching: false,
};

export default function (state = initialState, { type, payload }) {
  let newTodos;
  switch (type) {
    case ADD_TODO:
      newTodos = [payload, ...state.todos];
      saveTodoInLocal(newTodos);
      successNotification(messages.ADD_TODO_SUCCESS);
      return {
        todos: sortTodoByDate(newTodos),
      };
    case UPDATE_TODO:
      newTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        }
        return todo;
      });
      saveTodoInLocal(newTodos);
      successNotification(messages.UPDATE_TODO_SUCCESS);
      return {
        todos: sortTodoByDate(newTodos),
      };
    case SEARCHING:
      return {
        ...state,
        searching: true,
      };
    case SEARCH_TODO:
      newTodos = sortTodoByDate(getTodoInLocal()).filter((todo) =>
        todo.title.toLowerCase().includes(payload)
      );
      return {
        searching: false,
        todos: newTodos,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        todos: sortTodoByDate(getTodoInLocal()),
      };
    case REMOVE_TODO:
      newTodos = state.todos.filter((todo) => todo.id !== payload.id);
      saveTodoInLocal(newTodos);
      successNotification(messages.REMOVE_TODO_SUCCESS);
      return {
        todos: sortTodoByDate(newTodos),
      };
    case REMOVE_TODO_SELECTEDS:
      newTodos = state.todos.filter((todo) => !payload.includes(todo.id));
      saveTodoInLocal(newTodos);
      successNotification(messages.REMOVE_TODO_SUCCESS);
      return {
        todos: sortTodoByDate(newTodos),
      };
    default:
      return state;
  }
}
