import { LOGIN_TYPE, LOGOUT_TYPE } from '../actions/auth.actions';

const initialState = {
  loading: false,
  loggedin: false,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN_TYPE}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case `${LOGIN_TYPE}_FULFILLED`:
      return {
        ...state,
        error: false,
        loading: false,
        loggedin: true,
      };
    case `${LOGIN_TYPE}_REJECTED`:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loggedin: false,
      };
    case `${LOGOUT_TYPE}_PENDING`:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case `${LOGOUT_TYPE}_FULFILLED`:
      return {
        ...state,
        error: false,
        loading: false,
        loggedin: false,
      };
    case `${LOGOUT_TYPE}_REJECTED`:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
