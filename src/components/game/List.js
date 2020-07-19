import React, { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GameListItem from './ListItem';
import { AuthUserContext } from '../../common/providers/AuthUserProvider';
import { getGames } from '../../state/actions/game.actions';
import GameLoadingList from './LoadingList';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const GameList = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.gameList.data);
  const authContext = useContext(AuthUserContext);
  const classes = useStyles();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const { authUser } = authContext;
    if (authUser && authUser.uid) {
      dispatch(getGames(authUser.uid));
    }
  }, [authContext, dispatch]);

  useEffect(() => {
    setLoading(games.loading);
  }, [games.loading]);

  return (
    <div className={classes.root}>
      {loading ? (
        <GameLoadingList />
      ) : (
        <Grid container spacing={3}>
          {games.data.map(game => (
            <Grid item md={6} xs={12} key={game.id}>
              <GameListItem game={game} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default GameList;
