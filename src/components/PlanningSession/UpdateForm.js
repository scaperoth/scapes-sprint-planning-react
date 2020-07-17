import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PlanningSessionForm from './Form';
import * as Routes from '../../constants/routes';
import {
  updatePlanningSession,
  getPlanningSessionById,
} from '../../state/actions/planning-session.actions';

const PlanningSessionUpdateForm = ({ authUser }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const planningSession = useSelector(state => state.planningSession.data);
  const loading = useSelector(state => state.planningSession.loading);

  useEffect(() => {
    if (!authUser) {
      return;
    }
    const paths = history.location.pathname.split('/');
    const sessionId = paths[paths.length - 1];
    dispatch(getPlanningSessionById(authUser.uid, sessionId));
  }, [history.location.pathname, authUser, dispatch]);

  const handleSubmit = async formFields => {
    await dispatch(
      updatePlanningSession(authUser.uid, {
        ...planningSession,
        ...formFields,
      }),
    );
    history.push(Routes.SESSIONS);
  };

  return (
    !!planningSession.key && (
      <PlanningSessionForm
        loading={loading}
        defaultValues={planningSession}
        handleSubmit={handleSubmit}
      />
    )
  );
};

PlanningSessionUpdateForm.propTypes = {
  authUser: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

export default PlanningSessionUpdateForm;
