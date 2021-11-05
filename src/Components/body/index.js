import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AddTodo } from '../AddTodo';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import styled from 'styled-components';
import './body.css';

import Modal from '../Modal';
import OpenModalButton from '../OpenModalButton';

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #5c3aff;
  }
`;

function Body() {
  const [isOpen, toggle] = useState(false);

  function handlOpenModal(open) {
    console.log('close modal');
    toggle(open);
  }
  const todotasks = useSelector((state) => state.taskReducer.tabTasks);
  // console.log(todotasks)
  const [status, setStatus] = useState('ALL ITEMS');
  const [filteredTask, setFilteredTask] = useState([]);
  //
  useEffect(() => {
    filteredHandler();
  }, [todotasks, status]);
  // console.log(filteredTask);
  // console.log(status);
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

  // console.log(setStatus)

  // console.log(todotasks);
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
              To do list <i className="fas fa-plus-circle addnewtodo"></i>
            </h4>
            <OpenModalButton handlClick={() => handlOpenModal(true)}>
              Open modal
            </OpenModalButton>
            <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
              <ModalContent>
                <h1> Awesome modal </h1>
              </ModalContent>
            </Modal>
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
