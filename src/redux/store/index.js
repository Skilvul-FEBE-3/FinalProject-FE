import { combineReducers, createStore } from 'redux';
import authReducer from '../reducer/authReducer';

const allReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(allReducer);

export default store;
