import {
  CREATE_TYPE,
  READ_TYPE,
  UPDATE_TYPE,
} from '../actions/planning-session.actions';
import { buildActionRequests } from '../helpers';
import ServerError from '../errors/server.error';

const createActions = buildActionRequests(CREATE_TYPE);
const readActions = buildActionRequests(READ_TYPE);
const updateActions = buildActionRequests(UPDATE_TYPE);

const initialState = {
  loading: false,
  errors: {},
  data: {},
};

const planningSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case createActions.pending.type:
    case readActions.pending.type:
    case updateActions.pending.type:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case createActions.fulfilled.type:
    case readActions.fulfilled.type:
    case updateActions.fulfilled.type:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case createActions.rejected.type:
    case readActions.rejected.type:
    case updateActions.rejected.type:
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
