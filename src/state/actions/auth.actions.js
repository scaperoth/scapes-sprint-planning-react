import { AuthService } from '../services';

export const LOGIN_TYPE = 'LOGIN';
export const LOGOUT_TYPE = 'LOGOUT';
export const REGISTRATION_TYPE = 'REGISTER_USER';

export const login = ({ email, password }) => ({
  payload: AuthService.login(email, password),
  type: LOGIN_TYPE,
});

export const logout = () => ({
  payload: AuthService.logout,
  type: LOGOUT_TYPE,
});

export const registerUser = ({ email, password }) => ({
  payload: AuthService.registerUser(email, password),
  type: REGISTRATION_TYPE,
});
