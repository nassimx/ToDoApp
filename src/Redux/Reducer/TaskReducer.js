import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../Types/ActionType';

const initialState = {
  tabTasks: [],
};
const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tabTasks: [...state.tabTasks, payload] };
    case DELETE_TASK:
      return {
        ...state,
        tabTasks: state.tabTasks.filter((el) => el.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tabTasks: state.tabTasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
