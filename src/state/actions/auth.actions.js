import { AuthService } from '../services';
import { AuthError } from '../errors';
import { buildActionRequests } from '../helpers';
import Storage, { LOGIN_KEY } from '../storage';

export const LOGIN_TYPE = 'LOGIN';
export const LOGOUT_TYPE = 'LOGOUT';

export const login = ({ email, password }) => async dispatch => {
  const { pending, fulfilled, rejected } = buildActionRequests(LOGIN_TYPE);
  dispatch(pending);
  try {
    await AuthService.login(email, password);
    Storage.setItem(LOGIN_KEY, true);
    dispatch(fulfilled);
  } catch (err) {
    const authError = new AuthError(err);
    const { fields: payload } = authError;
    dispatch({ ...rejected, payload });
    throw authError;
  }
};

export const logout = () => async dispatch => {
  const { pending, fulfilled, rejected } = buildActionRequests(LOGOUT_TYPE);
  await dispatch(pending);
  try {
    await AuthService.logout();
    dispatch(fulfilled);
  } catch (err) {
    dispatch(rejected);
  } finally {
    Storage.setItem(LOGIN_KEY, false);
  }
};
