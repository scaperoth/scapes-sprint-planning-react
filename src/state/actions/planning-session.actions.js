import { PlanningSessionService } from '../services';

export const CREATE_TYPE = 'CREATE_PLANNING_SESSION';
export const READ_TYPE = 'GET_PLANNING_SESSION';
export const READ_ALL_TYPE = 'GET_PLANNING_SESSIONS';
export const UPDATE_TYPE = 'UPDATE_PLANNING_SESSION';
export const DELETE_TYPE = 'DELETE_PLANNING_SESSION';

export const getPlanningSessionById = planningSessionId => ({
  payload: PlanningSessionService.getOne(planningSessionId),
  type: READ_TYPE,
});

export const getPlanningSessions = userId => ({
  payload: PlanningSessionService.getAll(userId),
  type: READ_ALL_TYPE,
});

export const createPlanningSession = (userId, options) => ({
  payload: PlanningSessionService.create(userId, options),
  type: CREATE_TYPE,
});

export const updatePlanningSession = options => ({
  payload: PlanningSessionService.update(options),
  type: UPDATE_TYPE,
});

export const removePlanningSession = (userId, options) => ({
  payload: PlanningSessionService.remove(userId, options),
  type: DELETE_TYPE,
});
