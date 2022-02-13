const initialState = {
  fetching: false,
  login: null,
  error: null,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_CALL_REQUEST':
      return {...state, fetching: true, error: null};
    case 'LOGIN_CALL_SUCCESS':
      return {...state, fetching: false, login: action.payload};
    case 'LOGIN_CALL_FAILURE':
      return {
        ...state,
        fetching: false,
        login: null,
        error: action.payload,
      };
    case 'LOGIN_INIT_STATE':
      return initialState;
    default:
      return state;
  }
}
