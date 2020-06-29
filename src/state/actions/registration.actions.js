import { RegistrationService } from '../services';
import { buildActionRequests } from '../helpers';
import { AuthError } from '../errors';

export const REGISTRATION_TYPE = 'REGISTER_USER';

export const registerUser = ({ email, password }) => async dispatch => {
  const { pending, fulfilled, rejected } = buildActionRequests(
    REGISTRATION_TYPE,
  );
  dispatch(pending);
  try {
    await RegistrationService.registerUser(email, password);
    await dispatch(fulfilled);
  } catch (err) {
    const authError = new AuthError(err);
    dispatch({ ...rejected, payload: authError.fields });
    throw authError;
  }
};
