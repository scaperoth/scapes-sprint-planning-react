import { GET_TYPE } from '../actions/planning-session.actions';
import { buildActionRequests } from '../helpers';
import ServerError from '../errors/server.error';

const getActions = buildActionRequests(GET_TYPE);

const initialState = {
  loading: false,
  errors: {},
  data: [],
};

const planningSessionListReducer = (state = initialState, action) => {
  switch (action.type) {
    case getActions.pending.type:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case getActions.fulfilled.type:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case getActions.rejected.type:
      return {
        ...state,
        loading: false,
        errors: new ServerError(action.payload),
      };
    default:
      return state;
  }
};

export default planningSessionListReducer;
