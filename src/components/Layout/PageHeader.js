import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';
import PageSubtitle from './PageSubtitle';
import PageDescription from './PageDescription';

const PageHeader = ({ title, subtitle, description, children }) => (
  <div>
    <PageTitle>{title}</PageTitle>
    {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
    {description && <PageDescription>{description}</PageDescription>}
    {children}
  </div>
);

PageHeader.defaultProps = {
  subtitle: '',
  description: '',
  children: null,
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default PageHeader;
