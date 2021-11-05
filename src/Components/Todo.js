import React from 'react';
import { useDispatch } from 'react-redux';
import { complete, remove } from '../Redux/Action/TaskAction';
import './todo.css';
export const Todo = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="task">
        <div className="round" key={item.id}>
          <input type="checkbox" id="checkbox" value={item.id} />
          <label
            htmlFor="checkbox"
            onClick={() => dispatch(complete(item.id))}
          />
        </div>
        <div id="tasktext">
          <h2 className={item.isDone ? 'Done' : null}>{item.task}</h2>
        </div>
        {/* <button onClick={() => dispatch(complete(item.id))}>done</button> */}

        <span id="deleteicon" onClick={() => dispatch(remove(item.id))}>
          Delete
        </span>
      </div>
    </div>
  );
};
