import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Navbar from '../Navbar/MenuAppBar';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default PageLayout;
