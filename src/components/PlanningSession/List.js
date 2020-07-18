import React, { useEffect, useContext, useState } from 'react';
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
  const planningSessions = useSelector(state => state.planningSessionList);
  const authContext = useContext(AuthUserContext);
  const classes = useStyles();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const { authUser } = authContext;
    if (authUser && authUser.uid) {
      dispatch(getPlanningSessions(authUser.uid));
    }
  }, [authContext, dispatch]);

  useEffect(() => {
    setLoading(planningSessions.loading);
  }, [planningSessions.loading]);

  return (
    <div className={classes.root}>
      {loading ? (
        <SessionLoadingList />
      ) : (
        <Grid container spacing={3}>
          {planningSessions.data.map(planningSession => (
            <Grid item md={6} xs={12} key={planningSession.id}>
              <SessionListItem planningSession={planningSession} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default SessionList;
