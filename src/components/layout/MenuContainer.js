import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Navbar from '../navigation/MenuAppBar';

const PageLayout = ({ children }) => (
  <div>
    <Navbar />
    <Container>{children}</Container>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default PageLayout;
