import { combineReducers } from 'redux';
import user from './user.reducer';
import auth from './auth.reducer';
import registration from './registration.reducer';
import game from './game.reducer';
import gameList from './game-list.reducer';

const reducers = combineReducers({
  user,
  auth,
  registration,
  game,
  gameList,
});

export default reducers;
