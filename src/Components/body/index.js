import React from 'react';
import { AddTodo } from '../AddTodo';
import { TodoList } from '../TodoList';
import './body.css';
function Body() {
  return (
    <div className="container">
      <div className="text">
        <h1 className="title">To do list</h1>
        <h2 className="description">What needs to be done today?</h2>
      </div>
      <AddTodo />
      <div>{/* <TodoList /> */}</div>
    </div>
  );
}

export default Body;
