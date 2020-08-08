import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Jumbotron,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Tooltip,
} from 'reactstrap';
import { removeTodo, removeTodoSelecteds } from '../flux/actions/todoAction';
import TrashIcon from './icons/Trash';
import NoTodo from './NoTodo';
import Searching from './Searching';
import Todo from './Todo';
import AlertCircle from './icons/AlertCircle';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const searching = useSelector((state) => state.todoReducer.searching);
  const [modal, setModal] = useState(false);
  const [todoRemove, setTodoRemove] = useState(null);
  const [todoSelectedIds, setTodoSelectedIds] = useState([]);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const closeModal = () => {
    setModal(false);
    if (todoRemove) {
      setTodoRemove(null);
    }
  };

  const openModal = (todo) => {
    setModal(true);
    if (todo.id) {
      setTodoRemove(todo);
    }
  };

  const selectTodo = (todo, isSelect) => {
    let newTodoSelectedIds;
    if (isSelect) {
      newTodoSelectedIds = [todo.id, ...todoSelectedIds];
    } else {
      newTodoSelectedIds = todoSelectedIds.filter(
        (todoSelectedId) => todoSelectedId !== todo.id
      );
    }
    setTodoSelectedIds(newTodoSelectedIds);
  };

  const handleRemoveTodo = () => {
    if (todoRemove) {
      // if remove one
      dispatch(removeTodo(todoRemove));
      if (todoSelectedIds.length) {
        // Remove Todo from TodoSelecteds
        selectTodo(todoRemove, false);
      }
    } else {
      // Remove multiple
      dispatch(removeTodoSelecteds(todoSelectedIds));
      setTodoSelectedIds([]);
    }
    closeModal();
  };

  if (searching) {
    return <Searching />;
  }
  return (
    <Fragment>
      <Modal isOpen={modal}>
        <ModalHeader className="warning-modal-header">
          <AlertCircle />
          <span className="ml-1">Confirm to delete</span>
        </ModalHeader>
        <ModalBody>
          Do you really want to delete
          <b className="ml-1">{`${
            todoRemove ? todoRemove.title : 'Todo selecteds'
          }`}</b>{' '}
          ?
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleRemoveTodo} size="sm" color="warning">
            OK
          </Button>{' '}
          <Button onClick={closeModal} size="sm" outline color="warning">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {todoSelectedIds.length ? (
        <Row className="sticky-top">
          <Jumbotron
            className="
            w-100 border 
            p-2 d-flex 
            align-items-center 
            justify-content-between 
            bulk-action"
          >
            <div className="ml-3">Bulk Action:</div>
            <div>
              <Button className="mr-3" color="primary" size="sm">
                <span id="Tooltip">Done</span>
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target="Tooltip"
                  toggle={toggle}
                >
                  This feature is ignored
                </Tooltip>
              </Button>
              <Button color="danger" onClick={openModal} size="sm">
                <TrashIcon />
                <span>Remove All</span>
              </Button>
            </div>
          </Jumbotron>
        </Row>
      ) : null}
      {todos.length ? (
        todos.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            openModal={openModal}
            selectTodo={selectTodo}
          />
        ))
      ) : (
        <NoTodo />
      )}
    </Fragment>
  );
};

export default React.memo(TodoList);
