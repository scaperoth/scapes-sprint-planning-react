import { REGISTRATION_TYPE } from '../actions/registration.actions';
import { buildActionRequests } from '../helpers';

const registerActions = buildActionRequests(REGISTRATION_TYPE);

const initialState = {
  loading: false,
  errors: {},
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case registerActions.pending.type:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case registerActions.fulfilled.type:
      return {
        ...state,
        loading: false,
      };
    case registerActions.rejected.type:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
