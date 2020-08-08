import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-notifications-component/dist/theme.css';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import TodoList from './components/TodoList';
import ReactNotification from 'react-notifications-component';
import PlusIcon from './components/icons/Plus';
import SquareXIcon from './components/icons/SquareX';

function App() {
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <div className="app">
      <ReactNotification />
      <Container className="mt-4" fluid="lg">
        <Row className="d-flex justify-content-between">
          <Col className="open-sidebar-mobile" onClick={openSidebar}>
            <PlusIcon />
          </Col>
          <Col
            xs={12}
            md={6}
            className={`sidebar-mobile ${sidebar ? 'open' : null}`}
          >
            <span className="close-sidebar-mobile" onClick={closeSidebar}>
              <SquareXIcon />
            </span>
            <h5 className="text-center mt-3 mb-4">New Task</h5>
            <AddTodo />
          </Col>
          <Col xs={12} md={6}>
            <h5 className="text-center mt-3 mb-4">Todo List</h5>
            <SearchTodo />
            <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
