const initialState = {
  fetching: false,
  register: null,
  error: null,
};

export function registerReducer(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_CALL_REQUEST':
      return {...state, fetching: true, error: null};
    case 'REGISTER_CALL_SUCCESS':
      return {...state, fetching: false, register: action.payload};
    case 'REGISTER_CALL_FAILURE':
      return {
        ...state,
        fetching: false,
        register: null,
        error: action.payload,
      };
    case 'REGISTER_INIT_STATE':
      return initialState;
    default:
      return state;
  }
}
