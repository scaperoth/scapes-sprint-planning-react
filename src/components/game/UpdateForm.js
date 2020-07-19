import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GameForm from './Form';
import * as Routes from '../../constants/routes';
import {
  updateGame,
  getGameById,
} from '../../state/actions/game.actions';
import useAlert from '../../common/hooks/useAlert';

const GameUpdateForm = ({ authUser }) => {
  const { addAlert } = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const game = useSelector(state => state.game.data);
  const loading = useSelector(state => state.game.loading);

  useEffect(() => {
    if (!authUser) {
      return;
    }
    const paths = history.location.pathname.split('/');
    const sessionId = paths[paths.length - 1];
    dispatch(getGameById(sessionId));
  }, [history.location.pathname, authUser, dispatch]);

  const handleSubmit = async formFields => {
    await dispatch(
      updateGame({
        ...game,
        ...formFields,
      }),
    );
    addAlert('Successfully updated planning session', 'success');
    history.push(Routes.GAMES);
  };

  return (
    !!game.id && (
      <GameForm
        loading={loading}
        defaultValues={game}
        handleSubmit={handleSubmit}
      />
    )
  );
};

GameUpdateForm.propTypes = {
  authUser: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

export default GameUpdateForm;
