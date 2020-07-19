export const HOME = '/';
export const LOGIN = '/login';
export const LOGOUT = '/logout';
export const SIGNUP = '/signup';
export const PASSWORD_FORGET = '/pw-forget';
export const GAMES = '/games';
export const CREATE_GAME = '/games/new';
export const UPDATE_GAME = id => `/games/${id || ':session_id'}`;
export const START_GAME = id => `/games/${id || ':session_id'}/play`;

export const LOGIN_REDIRECT = GAMES;
export const REGISTER_REDIRECT = HOME;
