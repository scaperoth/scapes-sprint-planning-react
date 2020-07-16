import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SessionListItem from './SessionListItem';
import AuthUserContext from '../Context/AuthUserContext';
import { getPlanningSessions } from '../../state/actions/planning-session.actions';

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
                <Grid item xs={6} key={planningSession.key}>
                  <SessionListItem planningSession={planningSession} />
                </Grid>
              ))}
            </Grid>
          )
        }
      </AuthUserContext.Consumer>
    </div>
  );
};

export default SessionList;
