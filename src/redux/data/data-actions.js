export const translateStarted = props => {
  return {
    type: 'API_CALL_REQUEST',
    payload: props,
  };
};

export const translateOnSuccess = translation => {
  return {
    type: 'API_CALL_SUCCESS',
    payload: translation,
  };
};

export const translateOnError = error => {
  return {
    type: 'API_CALL_FAILURE',
    payload: error,
  };
};
