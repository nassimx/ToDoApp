import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AddTodo } from '../addtodo/AddTodo';
import Modalcomp from '../../Components/modal/Modalcomp';
import { TodoFilter } from '../../Components/todofilter/TodoFilter';
import { TodoList } from '../../Components/todolist/TodoList';
import './body.css';

function Body() {
  const todotasks = useSelector((state) => state.taskReducer.tabTasks);
  const [status, setStatus] = useState('ALL ITEMS');
  const [filteredTask, setFilteredTask] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  //
  useEffect(() => {
    filteredHandler();
  }, [todotasks, status]);
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  //
  const filteredHandler = () => {
    switch (status) {
      case 'COMPLETED':
        setFilteredTask(todotasks.filter((todo) => todo.isDone === true));
        break;
      case 'NOT COMPLETED':
        setFilteredTask(todotasks.filter((todo) => todo.isDone === false));
        break;
      default:
        setFilteredTask(todotasks);
        break;
    }
  };
  return (
    <div className="container">
      <div className="text">
        <h1 className="title">To do list</h1>
        <h2 className="description">What needs to be done today?</h2>
      </div>
      <AddTodo />
      {todotasks && todotasks.length ? (
        <div className="box">
          <div className="topbox">
            <h4 className="btn-newtodo">
              To do list
              <i
                className="fas fa-plus-circle addnewtodo"
                onClick={() => setModalShow(true)}
              ></i>
            </h4>
            <Modalcomp show={modalShow} onHide={() => setModalShow(false)} />
            <TodoFilter statusHandler={statusHandler} />
          </div>
          <div className="tasklist">
            <TodoList filteredTask={filteredTask} />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Body;
