import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SessionListItem from './ListItem';
import { AuthUserContext } from '../../common/providers/AuthUserProvider';
import { getPlanningSessions } from '../../state/actions/planning-session.actions';
import SessionLoadingList from './LoadingList';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const SessionList = () => {
  const dispatch = useDispatch();
  const planningSessions = useSelector(state => state.planningSessionList.data);
  const authContext = useContext(AuthUserContext);
  const classes = useStyles();

  useEffect(() => {
    const { authUser } = authContext;
    if (authUser && authUser.uid) {
      dispatch(getPlanningSessions(authUser.uid));
    }
  }, [authContext, dispatch]);

  return (
    <div className={classes.root}>
      <AuthUserContext.Consumer>
        {({ authUser }) =>
          authUser ? (
            <Grid container spacing={3}>
              {planningSessions.map(planningSession => (
                <Grid item md={6} xs={12} key={planningSession.key}>
                  <SessionListItem planningSession={planningSession} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <SessionLoadingList />
          )
        }
      </AuthUserContext.Consumer>
    </div>
  );
};

export default SessionList;
