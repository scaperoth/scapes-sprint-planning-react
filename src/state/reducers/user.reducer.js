import { GET_USER_TYPE } from '../actions/user.actions';
import { buildActionRequests } from '../helpers';

const userActions = buildActionRequests(GET_USER_TYPE);
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.fulfilled.type:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
