import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const PageDescription = ({ children }) => (
  <Typography variant="body1">
    {children}
  </Typography>
);

PageDescription.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageDescription;
