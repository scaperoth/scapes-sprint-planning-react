import { PlanningSessionService } from '../services';

export const GET_TYPE = 'GET_PLANNING_SESSIONS';
export const CREATE_TYPE = 'CREATE_PLANNING_SESSION';
export const UPDATE_TYPE = 'UPDATE_PLANNING_SESSION';
export const DELETE_TYPE = 'DELETE_PLANNING_SESSION';

export const getPlanningSessions = (userId) => ({
  payload: PlanningSessionService.get(userId),
  type: GET_TYPE,
});

export const createPlanningSession = (userId, options) => ({
  payload: PlanningSessionService.create(userId, options),
  type: CREATE_TYPE,
});
