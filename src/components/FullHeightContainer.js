import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const StickyFooter = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

StickyFooter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StickyFooter;
