import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const PageTitle = ({ children }) => (
  <Typography component="h4" variant="h3">
    {children}
  </Typography>
);

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageTitle;
