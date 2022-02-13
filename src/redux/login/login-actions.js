export const loginStarted = props => {
  return {
    type: 'LOGIN_CALL_REQUEST',
    payload: props,
  };
};

export const loginOnSuccess = user => {
  return {
    type: 'LOGIN_CALL_SUCCESS',
    payload: user,
  };
};

export const loginOnError = error => {
  return {
    type: 'LOGIN_CALL_FAILURE',
    payload: error,
  };
};
