import { CREATE_TYPE } from '../actions/planning-session.actions';
import { buildActionRequests } from '../helpers';
import ServerError from '../errors/server.error';

const createActions = buildActionRequests(CREATE_TYPE);

const initialState = {
  loading: false,
  errors: {},
  data: {},
};

const planningSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case createActions.pending.type:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case createActions.fulfilled.type:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case createActions.rejected.type:
      return {
        ...state,
        loading: false,
        errors: new ServerError(action.payload),
      };
    default:
      return state;
  }
};

export default planningSessionReducer;
