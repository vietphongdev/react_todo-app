import {
  ADD_TODO,
  UPDATE_TODO,
  SEARCHING,
  SEARCH_TODO,
  CLEAR_SEARCH,
  REMOVE_TODO,
  REMOVE_TODO_SELECTEDS,
} from './types';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};

export const searching = () => {
  return {
    type: SEARCHING,
  };
};
export const searchTodo = (key) => {
  return {
    type: SEARCH_TODO,
    payload: key,
  };
};
export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
};

export const removeTodoSelecteds = (todos) => {
  return {
    type: REMOVE_TODO_SELECTEDS,
    payload: todos,
  };
};
