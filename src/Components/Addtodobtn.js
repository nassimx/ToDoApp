import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Action/TaskAction';

export default function Addtodobtn() {
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
    <div>
      <button
        disabled={!task}
        className="todo-btn"
        type="submit"
        onClick={newItem}
      >
        Add
      </button>
    </div>
  );
}
