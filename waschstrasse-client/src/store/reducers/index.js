import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import errorReducer from './errorReducer';
import flagsReducer from './flagsReducer';

const rootReducer = combineReducers({
  currentUserReducer,
  errorReducer,
  flagsReducer,
});

export default rootReducer;
