import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const PageSubtitle = ({ children }) => (
  <Typography variant="h5">{children}</Typography>
);

PageSubtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageSubtitle;
