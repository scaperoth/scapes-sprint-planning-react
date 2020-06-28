import * as AuthService from '../services/auth.service';

export const LOGIN_TYPE = 'LOGIN';
export const LOGOUT_TYPE = 'LOGOUT';

export const login = ({ email, password }) => ({
  payload: AuthService.login(email, password),
  type: LOGIN_TYPE,
});

export const logout = () => ({
  payload: AuthService.logout,
  type: LOGOUT_TYPE,
});
