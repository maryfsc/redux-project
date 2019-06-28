import { createStore } from 'redux';
import { myReducer, initialState } from '../reducers/myReducer'

export const store = createStore(
  myReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

