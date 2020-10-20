import { combineReducers } from 'redux';
import UserReducer from './UserReducer';

export default combineReducers({
  [UserReducer.name]: UserReducer.reducer,
});