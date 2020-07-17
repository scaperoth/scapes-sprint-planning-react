import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PlanningSessionForm from './Form';
import * as Routes from '../../constants/routes';
import { createPlanningSession } from '../../state/actions/planning-session.actions';
import AuthUserContext from '../Context/AuthUserContext';

const PlanningSessionCreateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (formFields, authUser) => {
    await dispatch(createPlanningSession(authUser.uid, formFields));
    history.push(Routes.SESSIONS);
  };

  return (
    <AuthUserContext.Consumer>
      {({ authUser }) => (
        <PlanningSessionForm
          handleSubmit={formFields => handleSubmit(formFields, authUser)}
        />
      )}
    </AuthUserContext.Consumer>
  );
};

export default PlanningSessionCreateForm;
