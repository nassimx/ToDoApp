import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../Types/ActionType';

//payload :task id isDone
export const add = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

//payload : id
export const remove = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

// payload : id
export const complete = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};
