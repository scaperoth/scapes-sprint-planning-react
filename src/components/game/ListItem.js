import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Settings';
import Link from '@material-ui/core/Link';
import * as Routes from '../../constants/routes';
import { AuthUserContext } from '../../common/providers/AuthUserProvider';
import { removeGame as removeGameAction } from '../../state/actions/game.actions';
import ConfirmDialog from '../alerts/ConfirmDialog';
import useAlert from '../../common/hooks/useAlert';

const useStyles = makeStyles(theme => ({
  root: {
    animation: `${theme.animations.fadeIn.name} ${theme.timing[3]} ${theme.transitions.easing.easeInOut} forwards`,
    opacity: 0,
  },
  ...theme.animations.fadeIn.keyframes,
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
  },
  url: {
    fontSize: 12,
  },
  metaWrapper: {},
  meta: {
    fontSize: 12,
  },
  actions: {},
  actionsControls: {
    marginLeft: 'auto',
  },
}));

const GameListItem = ({ game }) => {
  const { addAlert } = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const [confirmOpen, setConfirmOpen] = useState();
  const classes = useStyles();

  const getDate = () => {
    const secs = game.createdAt.seconds;
    const t = new Date(secs * 1000);
    return t.toDateString();
  };

  const getStories = () => {
    const { stories } = game;
    if (!stories) {
      return 0;
    }
    return stories.length;
  };

  const getEffort = () => {
    const { stories } = game;
    if (!stories) {
      return 0;
    }
    return stories.reduce((prev, curr) => curr.estimated + prev, 0);
  };

  const getDeck = () => {
    const { deckType } = game;
    if (!deckType) {
      return 'None';
    }
    return deckType;
  };

  const getStartUrl = () =>
    window.location.origin.toString() + Routes.START_GAME(game.id);

  const startGame = () => {
    history.push(Routes.START_GAME(game.id));
  };

  const routeToEditGame = () => {
    history.push(Routes.UPDATE_GAME(game.id));
  };

  const openRemoveConfirm = () => {
    setConfirmOpen(true);
  };

  const onConfirmClose = () => {
    setConfirmOpen(false);
  };

  const removeGame = authUser => {
    setConfirmOpen(false);
    addAlert('Successfully removed game', 'success');
    dispatch(removeGameAction(authUser.uid, game));
  };

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              comopnent={'h4'}
              variant={'h6'}
            >
              {game.name}
            </Typography>
            <Typography
              className={classes.date}
              color="textSecondary"
              gutterBottom
            >
              {getDate()}
            </Typography>
            <Typography
              className={classes.url}
              color="textSecondary"
              gutterBottom
            >
              URL:&nbsp;
              <Link href={Routes.START_GAME(game.id)}>{getStartUrl()}</Link>
            </Typography>
            <div className={classes.metaWrapper}>
              <Typography className={classes.meta}>
                Stories: {getStories()}
              </Typography>
              <Typography className={classes.meta}>
                Total Effort: {getEffort()}
              </Typography>
              <Typography className={classes.meta}>
                Deck Type: {getDeck()}
              </Typography>
            </div>
          </CardContent>
          <CardActions className={classes.actions} disableSpacing>
            <Button size="small" color="primary" onClick={startGame}>
              Start Game
            </Button>
            <div className={classes.actionsControls}>
              <IconButton
                aria-label="edit"
                color="secondary"
                onClick={routeToEditGame}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={openRemoveConfirm}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </CardActions>
        </Card>
      </Grid>
      <AuthUserContext.Consumer>
        {({ authUser }) =>
          confirmOpen && (
            <ConfirmDialog
              title={'Remove Game'}
              message={
                'Are you sure you want to remove this game? This action cannot be undone.'
              }
              onConfirm={() => removeGame(authUser)}
              onClose={onConfirmClose}
            />
          )
        }
      </AuthUserContext.Consumer>
    </Grid>
  );
};

GameListItem.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    deckType: PropTypes.string,
    createdAt: PropTypes.object,
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default GameListItem;
