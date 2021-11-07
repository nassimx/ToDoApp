import React from 'react';
import { useDispatch } from 'react-redux';
import { complete, remove } from '../../Redux/Action/TaskAction';
import './todo.css';
export const Todo = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="task animate__animated animate__fadeInDown">
        <label className="checkboxcon">
          <input type="checkbox" onClick={() => dispatch(complete(item.id))} />
          <span className="checkmark" />
        </label>
        <div id="tasktext">
          <h2 className={item.isDone ? 'Done' : null}>{item.task}</h2>
        </div>
        <p id="deleteicon" onClick={() => dispatch(remove(item.id))}>
          Delete
        </p>
      </div>
    </div>
  );
};
