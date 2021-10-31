import React from 'react';

import './App.css';
import { AddTodo } from './Components/AddTodo';
import { TodoList } from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h2>to do app</h2>
      <AddTodo />
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
