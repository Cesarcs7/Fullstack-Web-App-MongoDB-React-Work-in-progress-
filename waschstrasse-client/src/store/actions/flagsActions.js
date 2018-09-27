import { CREATING_WASCHSTRASSE_FLAG } from '../actionTypes';

export function setCreatingWaschstrasseFlag(flag) {
  return {
    type: CREATING_WASCHSTRASSE_FLAG,
    flag,
  };
}

export function creatingWaschstrasseFlag(flag) {
  return dispatch => (
    dispatch(setCreatingWaschstrasseFlag(flag))
  );
}
