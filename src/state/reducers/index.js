import { combineReducers } from 'redux';
import user from './user.reducer';
import auth from './auth.reducer';
import registration from './registration.reducer';
import planningSession from './planning-session.reducer';
import planningSessionList from './planning-session-list.reducer';

const reducers = combineReducers({
  user,
  auth,
  registration,
  planningSession,
  planningSessionList,
});

export default reducers;
