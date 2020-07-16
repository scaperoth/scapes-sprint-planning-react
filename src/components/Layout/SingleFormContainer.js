import React from 'react';
import MuiContainer from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import FullHeightContainer from './FullHeightContainer';

const Container = ({ maxWidth = 'xs', children }) => (
  <FullHeightContainer>
    <MuiContainer component="main" maxWidth={maxWidth}>
      {children}
    </MuiContainer>
  </FullHeightContainer>
);

Container.defaultProps = {
  maxWidth: 'xs',
};

Container.propTypes = {
  maxWidth: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default Container;
