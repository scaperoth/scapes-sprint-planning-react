import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Footer from '../content/Footer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const FullHeightContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <Footer />
    </div>
  );
};

FullHeightContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default FullHeightContainer;
