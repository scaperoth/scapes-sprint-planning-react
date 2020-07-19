import { GameService } from '../services';

export const CREATE_TYPE = 'CREATE_GAME';
export const READ_TYPE = 'GET_GAME';
export const READ_ALL_TYPE = 'GET_GAMES';
export const UPDATE_TYPE = 'UPDATE_GAME';
export const DELETE_TYPE = 'DELETE_GAME';

export const getGameById = (userId, gameId) => ({
  payload: GameService.getOne(userId, gameId),
  type: READ_TYPE,
});

export const getGames = userId => ({
  payload: GameService.getAll(userId),
  type: READ_ALL_TYPE,
});

export const createGame = (userId, options) => ({
  payload: GameService.create(userId, options),
  type: CREATE_TYPE,
});

export const updateGame = (userId, options) => ({
  payload: GameService.update(userId, options),
  type: UPDATE_TYPE,
});

export const removeGame = (userId, options) => ({
  payload: GameService.remove(userId, options),
  type: DELETE_TYPE,
});
