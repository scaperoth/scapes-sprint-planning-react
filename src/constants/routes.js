export const HOME = '/';
export const LOGIN = '/login';
export const LOGOUT = '/logout';
export const SIGNUP = '/signup';
export const PASSWORD_FORGET = '/pw-forget';
export const GAMES = '/sessions';
export const CREATE_GAME = '/sessions/new';
export const UPDATE_GAME = id => `/sessions/${id || ':session_id'}`;
export const START_GAME = id => `/sessions/${id || ':session_id'}/play`;

export const LOGIN_REDIRECT = GAMES;
export const REGISTER_REDIRECT = HOME;
