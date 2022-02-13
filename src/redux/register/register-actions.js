export const registerStarted = props => {
  return {
    type: 'REGISTER_CALL_REQUEST',
    payload: props,
  };
};

export const registerOnSuccess = user => {
  return {
    type: 'REGISTER_CALL_SUCCESS',
    payload: user,
  };
};

export const registerOnError = error => {
  return {
    type: 'REGISTER_CALL_FAILURE',
    payload: error,
  };
};
