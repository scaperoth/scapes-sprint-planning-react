import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GameForm from './Form';
import * as Routes from '../../constants/routes';
import { createGame } from '../../state/actions/game.actions';
import { AuthUserContext } from '../../common/providers/AuthUserProvider';
import useAlert from '../../common/hooks/useAlert';

const GameCreateForm = () => {
  const { addAlert } = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (formFields, authUser) => {
    await dispatch(createGame(authUser.uid, formFields));
    addAlert('Successfully created planning session', 'success');
    history.push(Routes.GAMES);
  };

  return (
    <AuthUserContext.Consumer>
      {({ authUser }) => (
        <GameForm
          handleSubmit={formFields => handleSubmit(formFields, authUser)}
        />
      )}
    </AuthUserContext.Consumer>
  );
};

export default GameCreateForm;
