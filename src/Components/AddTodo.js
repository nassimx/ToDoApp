import React, { useState } from 'react';
import './addtodo.css';
export const AddTodo = () => {
  const [input, setInput] = useState('');

  const handleinput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
  };
  return (
    <div className="todo-div">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Item"
          value={input}
          className="todo-input"
          name="text"
          onChange={handleinput}
        />

        <button disabled={!input} className="todo-btn" type="submit">
          Add <i className="fas fa-plus-circle plusicon"></i>
        </button>
      </form>
    </div>
  );
};
