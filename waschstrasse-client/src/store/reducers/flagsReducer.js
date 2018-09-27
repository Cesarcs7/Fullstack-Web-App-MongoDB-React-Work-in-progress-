import { CREATING_WASCHSTRASSE_FLAG } from '../actionTypes';

const initialState = {
  creatingWaschstrasseFlag: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATING_WASCHSTRASSE_FLAG:
      return {
        creatingWaschstrasseFlag: action.flag,
      };
    default:
      return state;
  }
};
