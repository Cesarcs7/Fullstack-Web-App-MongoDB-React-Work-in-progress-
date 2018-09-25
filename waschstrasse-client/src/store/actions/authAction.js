import apiCall from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errorAction';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  return dispatch => new Promise((resolve, reject) => apiCall('post', type, userData)
    .then(({ token, ...user }) => {
      localStorage.setItem('jwtToken', token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
      resolve();
    })
    .catch((err) => {
      dispatch(addError(err.message));
      reject();
    }));
}
