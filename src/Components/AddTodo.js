import React, { useState } from 'react';
import './addtodo.css';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Action/TaskAction';
// import Addtodobtn from './Addtodobtn';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const newItem = () => {
    if (task) {
      dispatch(add({ task: task, isDone: false, id: Math.random() }));
      setTask('');
    } else {
      <h4>erorr</h4>;
    }
  };

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
        {/* <Addtodobtn task={task} newItem={newItem} /> */}
        <button
          disabled={!task}
          className="todo-btn"
          type="submit"
          onClick={newItem}
        >
          Add <i className="fas fa-plus-circle plusicon"></i>
        </button>
      </form>
      <button
        disabled={!task}
        className="todo-btnmobile"
        type="submit"
        onClick={newItem}
      >
        Add <i className="fas fa-plus-circle plusicon"></i>
      </button>
    </div>
  );
};
