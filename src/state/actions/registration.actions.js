import * as RegistrationService from '../services/registration.service';

export const REGISTRATION_TYPE = 'REGISTER_USER';

export const registerUser = ({ email, password }) => ({
  payload: RegistrationService.registerUser(email, password),
  type: REGISTRATION_TYPE,
});
