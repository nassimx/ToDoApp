import React, { useState } from 'react';
import './addtodo.css';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Action/TaskAction';

export const AddTodo = () => {
  // const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const newItem = () => {
    if (task) {
      dispatch(add({ task: task, isDone: false, id: Math.random() }));
      setTask('');
    } else {
      <span>erorr</span>;
    }
  };

  // const handleinput = (e) => {
  //   setInput(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setInput('');
  // };
  return (
    <div className="todo-div">
      <form className="todo-form">
        <input
          type="text"
          placeholder="Enter Item"
          value={task}
          className="todo-input"
          name="text"
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          disabled={!task}
          className="todo-btn"
          type="submit"
          onClick={newItem}
        >
          Add <i className="fas fa-plus-circle plusicon"></i>
        </button>
      </form>
    </div>
  );
};
