import React, { useEffect, useContext, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SessionListItem from './SessionListItem';
import { AuthUserContext } from './Context';
import { getPlanningSessions } from '../state/actions/planning-session.actions';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const SessionList = () => {
  const dispatch = useDispatch();
  const planningSessions = useSelector(state => state.planningSessionList);
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
          authUser && (
            <Grid container spacing={3}>
              {planningSessions.data.map(planningSession => (
                <SessionListItem
                  key={planningSession.key}
                  userId={authUser.uid}
                >
                  {planningSession.name}
                </SessionListItem>
              ))}
            </Grid>
          )
        }
      </AuthUserContext.Consumer>
    </div>
  );
};

export default SessionList;
