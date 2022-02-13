const API_CALL_REQUEST = 'API_CALL_REQUEST';
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
const API_CALL_FAILURE = 'API_CALL_FAILURE';

// reducer with initial state
const initialState = {
  fetching: false,
  translation: null,
  error: null,
};

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {...state, fetching: true, error: null};
    case API_CALL_SUCCESS:
      return {...state, fetching: false, translation: action.payload};
    case API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        translation: null,
        error: action.error,
      };
    default:
      return state;
  }
}
