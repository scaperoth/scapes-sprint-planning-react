import React, { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
  const games = useSelector(state => state.gameList);
  const authContext = useContext(AuthUserContext);
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const { authUser } = authContext;
    if (authUser && authUser.uid) {
      dispatch(getGames(authUser.uid)).then(setLoading(false));
    }
  }, [authContext, dispatch]);

  return (
    <div className={classes.root}>
      {loading ? (
        <GameLoadingList />
      ) : (
        <div>
          {games.data.length > 0 && (
            <Grid container spacing={3}>
              {games.data.map(game => (
                <Grid item md={6} xs={12} key={game.id}>
                  <GameListItem game={game} />
                </Grid>
              ))}
            </Grid>
          )}
          {games.data.length === 0 && (
            <Typography
              component={'p'}
              variant={'body1'}
              color={'textSecondary'}
            >
              {"Looks like you don't have any games created yet..."}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default GameList;
