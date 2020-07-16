import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import PageTitle from './PageTitle';
import PageSubtitle from './PageSubtitle';
import PageDescription from './PageDescription';

const useStyles = makeStyles(theme => ({
  wrapper: {
    animation: `${theme.animations.rise.name} ${theme.timing[5]} ${theme.transitions.easing.easeInOut} forwards`,
    opacity: 0,
    transform: 'translateY(10%)',
  },
  ...theme.animations.rise.keyframes('10%'),
}));

const PageHeader = ({ title, subtitle, description, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <PageTitle>{title}</PageTitle>
      {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
      {description && <PageDescription>{description}</PageDescription>}
      {children}
    </div>
  );
};

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
