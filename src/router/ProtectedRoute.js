import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as Routes from '../constants/routes';
import { AuthUserContext } from '../components/Context';
import LoadingOverlay from '../components/Layout/LoadingOverlay';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Route
        {...rest}
        render={props =>
          authUser !== null ? (
            <div>
              <LoadingOverlay loading={authUser === true} />
              <Component {...props} />
            </div>
          ) : (
            <Redirect to={{ pathname: Routes.LOGIN }} />
          )
        }
      />
    )}
  </AuthUserContext.Consumer>
);

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
