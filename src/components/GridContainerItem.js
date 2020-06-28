import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const GridContainerItem = ({ children }) => (
  <Grid item xs>
    {children}
  </Grid>
);

GridContainerItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default GridContainerItem;
