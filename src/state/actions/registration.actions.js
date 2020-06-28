import * as RegistrationService from '../services/registration.service';

export const REGISTRATION_TYPE = 'REGISTER_USER';

export const registerUser = ({
  username,
  email,
  password,
  passwordConfirm,
}) => ({
  payload: RegistrationService.registerUser(
    username,
    email,
    password,
    passwordConfirm,
  ),
  type: REGISTRATION_TYPE,
});
