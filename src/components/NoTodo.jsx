import React from 'react';
import { Alert } from 'reactstrap';

const NoTodo = () => {
  return (
    <div color="light" className="text-center">
      <img
        alt="no-data"
        src="https://img.icons8.com/dotty/40/000000/file.png"
      />
      <Alert color="light">no todo, please add more ...</Alert>
    </div>
  );
};

export default NoTodo;
