export const HOME = '/';
export const LOGIN = '/login';
export const LOGOUT = '/logout';
export const SIGNUP = '/signup';
export const PASSWORD_FORGET = '/pw-forget';
export const SESSIONS = '/sessions';
export const CREATE_SESSION = '/sessions/new';
export const UPDATE_SESSION = id => `/sessions/${id || ':session_id'}`;
export const START_SESSION = id => `/sessions/${id || ':session_id'}/play`;

export const LOGIN_REDIRECT = SESSIONS;
export const REGISTER_REDIRECT = HOME;
