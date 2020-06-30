import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    padding: theme.spacing(5, 2),
    textAlign: 'center',
  },
}));

const SessionListItem = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item xs>
      <div className={classes.root}>{children}</div>
    </Grid>
  );
};

SessionListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string])
    .isRequired,
};

export default SessionListItem;
