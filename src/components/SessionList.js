import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SessionListItem from './SessionListItem';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const SessionList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <SessionListItem>test</SessionListItem>
        <SessionListItem>test</SessionListItem>
        <SessionListItem>test</SessionListItem>
      </Grid>
    </div>
  );
};

export default SessionList;
