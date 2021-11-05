import React from 'react';

import './App.css';
import { AddTodo } from './Components/AddTodo';
import Home from './Components/home';
// import { TodoFilter } from './Components/TodoFilter';
import { TodoList } from './Components/TodoList';
// console.log(filteredTask)

function App() {
  return (
    <div className="todo-app">
      <Home />
    </div>
  );
}

export default App;
