import { UserService } from '../services';

export const GET_USER_TYPE = 'GET_USER';

export const getUser = () => ({
  payload: UserService.getCurrentUser(),
  type: GET_USER_TYPE,
});
