import { GET_USER_TYPE } from '../actions/user.actions';

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER_TYPE}_FULFILLED`:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
