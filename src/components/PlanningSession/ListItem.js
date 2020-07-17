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
import * as Routes from '../../constants/routes';
import { AuthUserContext } from '../../common/providers/AuthUserProvider';
import { removePlanningSession } from '../../state/actions/planning-session.actions';
import ConfirmDialog from '../alerts/ConfirmDialog';

const useStyles = makeStyles(theme => ({
  root: {
    animation: `${theme.animations.fadeIn.name} ${theme.timing[5]} ${theme.transitions.easing.easeInOut} forwards`,
    opacity: 0,
  },
  ...theme.animations.fadeIn.keyframes,
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
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

const SessionListItem = ({ planningSession }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [confirmOpen, setConfirmOpen] = useState();
  const classes = useStyles();

  const getDate = () => new Date(planningSession.createdAt).toDateString();

  const getStories = () => {
    const { stories } = planningSession;
    if (!stories) {
      return 0;
    }
    return stories.length;
  };

  const getEffort = () => {
    const { stories } = planningSession;
    if (!stories) {
      return 0;
    }
    return stories.reduce((prev, curr) => curr.estimated + prev, 0);
  };

  const getDeck = () => {
    const { deckType } = planningSession;
    if (!deckType) {
      return 'None';
    }
    return deckType;
  };

  const routeToEditSession = () => {
    history.push(Routes.UPDATE_SESSION(planningSession.key));
  };

  const openRemoveConfirm = () => {
    setConfirmOpen(true);
  };

  const onConfirmClose = () => {
    setConfirmOpen(false);
  };

  const removeSession = authUser => {
    setConfirmOpen(false);
    dispatch(removePlanningSession(authUser.uid, planningSession));
  };

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textPrimary">
              {planningSession.name}
            </Typography>
            <Typography
              className={classes.date}
              color="textSecondary"
              gutterBottom
            >
              {getDate()}
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
            <Button size="small" color="primary">
              Start Session
            </Button>
            <div className={classes.actionsControls}>
              <IconButton
                aria-label="edit"
                color="secondary"
                onClick={routeToEditSession}
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
              title={'Remove Planning Session'}
              message={
                'Are you sure you want to remove this planning session? This action cannot be undone.'
              }
              onConfirm={() => removeSession(authUser)}
              onClose={onConfirmClose}
            />
          )
        }
      </AuthUserContext.Consumer>
    </Grid>
  );
};

SessionListItem.propTypes = {
  planningSession: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    deckType: PropTypes.string,
    createdAt: PropTypes.number,
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default SessionListItem;
