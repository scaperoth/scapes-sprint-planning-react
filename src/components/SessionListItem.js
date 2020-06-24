import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridContainerItem from './GridContainerItem';

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
    <GridContainerItem>
      <div className={classes.root}>{children}</div>
    </GridContainerItem>
  );
};

SessionListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default SessionListItem;
