import { AuthService } from '../services';
import { AuthError } from '../errors';
import { buildActionRequests } from '../helpers';
import Storage, { LOGIN_KEY } from '../storage';
import * as Routes from '../../constants/routes';

export const LOGIN_TYPE = 'LOGIN';
export const LOGOUT_TYPE = 'LOGOUT';
export const REGISTRATION_TYPE = 'REGISTER_USER';

export const login = ({ email, password }, history) => async dispatch => {
  const { pending, fulfilled, rejected } = buildActionRequests(LOGIN_TYPE);
  dispatch(pending);
  try {
    await AuthService.login(email, password);
    Storage.setItem(LOGIN_KEY, true);
    dispatch(fulfilled);
    if (history) {
      history.push(Routes.HOME);
    }
  } catch (err) {
    const { fields: payload } = new AuthError(err);
    dispatch({ ...rejected, payload });
  }
};

export const logout = (history) => async dispatch => {
  const { pending, fulfilled, rejected } = buildActionRequests(LOGOUT_TYPE);
  dispatch(pending);
  try {
    await AuthService.logout();
    dispatch(fulfilled);
  } catch (err) {
    dispatch(rejected);
  } finally {
    Storage.setItem(LOGIN_KEY, false);
    history.push(Routes.HOME);
  }
};
