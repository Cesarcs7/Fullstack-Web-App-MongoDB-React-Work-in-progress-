import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  currentUserReducer,
  errorReducer,
});

export default rootReducer;
