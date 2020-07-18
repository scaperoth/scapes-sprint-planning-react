import {
  READ_ALL_TYPE,
  DELETE_TYPE,
} from '../actions/planning-session.actions';
import { buildActionRequests } from '../helpers';
import ServerError from '../errors/server.error';

const getActions = buildActionRequests(READ_ALL_TYPE);
const deleteActions = buildActionRequests(DELETE_TYPE);

const initialState = {
  loading: false,
  errors: {},
  data: [],
};

const planningSessionListReducer = (state = initialState, action) => {
  switch (action.type) {
    case getActions.pending.type:
    case deleteActions.pending.type:
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
    case deleteActions.fulfilled.type:
      return {
        ...state,
        loading: false,
        data: state.data.filter(row => row.id !== action.payload.id),
      };
    case getActions.rejected.type:
    case deleteActions.rejected.type:
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
