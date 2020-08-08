import React, { useState } from 'react';
import { Button, Collapse, Input } from 'reactstrap';
import FileXIcon from './icons/FileX';
import UpdateTodo from './UpdateTodo';

const Todo = ({ todo, openModal, selectTodo }) => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    selectTodo(todo, isChecked);
  };

  return (
    <div className="mb-4">
      <div className="border py-2 px-3 d-sm-flex align-items-center justify-content-between">
        <div className="ml-3">
          <Input type="checkbox" onChange={handleCheckboxChange} />
          {todo.title}
        </div>
        <div className="group-btn-todo">
          <Button
            className="mr-3"
            color="info"
            onClick={toggleCollapse}
            size="sm"
          >
            Detail
          </Button>
          <Button color="danger" onClick={() => openModal(todo)} size="sm">
            <FileXIcon />
            Remove
          </Button>
        </div>
      </div>
      <div>
        <Collapse isOpen={collapse} className="w-100">
          <div className="border border-top-0 p-4">
            <UpdateTodo todo={todo} toggleCollapse={toggleCollapse} />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Todo;
