import { combineReducers } from 'redux';
import user from './user.reducer';
import auth from './auth.reducer';
import registration from './registration.reducer';

const reducers = combineReducers({ user, auth, registration });

export default reducers;
