import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';

export const TodoList = ({ filteredTask }) => {
  const tabTasks = useSelector((state) => state.taskReducer.tabTasks);

  return (
    <div className="todolist">
      {filteredTask.map((item) => (
        <Todo item={item} key={item.id} />
      ))}
    </div>
  );
};
