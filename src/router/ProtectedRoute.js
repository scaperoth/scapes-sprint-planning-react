import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as Routes from '../constants/routes';
import AuthUserContext from '../components/Context/AuthUserContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthUserContext.Consumer>
      {({ auth }) => (
        <Route
          {...rest}
          render={props =>
            auth.loggedin ? (
              <div>
                <Component {...props} />
              </div>
            ) : (
              <Redirect to={{ pathname: Routes.LOGOUT }} />
            )
          }
        />
      )}
    </AuthUserContext.Consumer>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
