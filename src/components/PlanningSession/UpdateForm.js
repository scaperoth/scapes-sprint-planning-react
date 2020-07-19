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
import useAlert from '../../common/hooks/useAlert';

const PlanningSessionUpdateForm = ({ authUser }) => {
  const { addAlert } = useAlert();
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
    dispatch(getPlanningSessionById(sessionId));
  }, [history.location.pathname, authUser, dispatch]);

  const handleSubmit = async formFields => {
    await dispatch(
      updatePlanningSession({
        ...planningSession,
        ...formFields,
      }),
    );
    addAlert('Successfully updated planning session', 'success');
    history.push(Routes.SESSIONS);
  };

  return (
    !!planningSession.id && (
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
