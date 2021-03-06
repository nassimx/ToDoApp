import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './Reducer';

const store = createStore(
  rootReducer,
  applyMiddleware()
  // other store enhancers if any
);
export default store;
