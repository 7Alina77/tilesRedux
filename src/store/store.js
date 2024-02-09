import { createStore } from 'redux';
import reducer from '../reducers/reducer';
import { initialState } from '../constants/constants';

const store = createStore(
  reducer,
  initialState,
);

export default store;