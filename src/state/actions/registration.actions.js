import { RegistrationService } from '../services';
import { buildActionRequests } from '../helpers';
import { AuthError } from '../errors';
import { login } from '../services/auth.service';

export const REGISTRATION_TYPE = 'REGISTER_USER';

export const registerUser = (
  { email, password },
  history,
) => async dispatch => {
  const [pending, fulfilled, rejected] = buildActionRequests(REGISTRATION_TYPE);
  dispatch(pending);
  try {
    await RegistrationService.registerUser(email, password);
    dispatch(fulfilled);
    dispatch(login({ email, password }, history));
  } catch (err) {
    const { fields: payload } = new AuthError(err);
    dispatch({ ...rejected, payload });
  }
};
