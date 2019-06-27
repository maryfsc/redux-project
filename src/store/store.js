import { createStore } from 'redux';
import { myReducer, initialState } from '../reducers/myReducer'

export const store = createStore(
  myReducer,
  initialState
);

