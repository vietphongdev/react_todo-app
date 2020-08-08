import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';
import { clearSearch, searching, searchTodo } from '../flux/actions/todoAction';
import { debounce } from '../helpers/debounce';
import { getTodoInLocal } from './../helpers/getTodoInLocal';

const SearchTodo = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSerchTodo = () => {
    const todos = getTodoInLocal();
    if (todos.length < 2) return;
    const key = inputRef.current.value.trim().toLowerCase();
    if (key) {
      dispatch(searching());
      setTimeout(() => {
        dispatch(searchTodo(key));
      }, 2000);
    } else {
      dispatch(clearSearch());
    }
  };

  const handleChange = debounce(handleSerchTodo, 1000);

  return (
    <FormGroup>
      <Label>
        <b>Search Todo</b>
      </Label>
      <Input
        type="text"
        placeholder="Search your task..."
        innerRef={inputRef}
        onChange={handleChange}
        className="mb-3"
      />
    </FormGroup>
  );
};

export default SearchTodo;
