import { LOGIN_TYPE, LOGOUT_TYPE } from '../actions/auth.actions';
import Storage, { LOGIN_KEY } from '../storage';
import { buildActionRequests } from '../helpers';

const loginActions = buildActionRequests(LOGIN_TYPE);
const logoutActions = buildActionRequests(LOGOUT_TYPE);

const initialState = {
  loggedin: Storage.getItem(LOGIN_KEY) === 'true',
  loading: false,
  errors: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.pending.type:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case loginActions.fulfilled.type:
      return {
        ...state,
        loggedin: true,
      };
    case loginActions.rejected.type:
      return {
        ...state,
        loggedin: false,
        loading: false,
        errors: action.payload,
      };
    case logoutActions.fulfilled.type:
    case logoutActions.rejected.type:
      return {
        ...state,
        loggedin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
