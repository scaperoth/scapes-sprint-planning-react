import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Pages from '../pages';
import ProtectedRoute from './ProtectedRoute';
import { AuthService } from '../state/services';
import { AuthUserContext } from '../components/Context';

const AppRouter = () => {
  const [authUser, setAuthUser] = useState(true);
  useEffect(() => {
    AuthService.onAuthChanged(authenticatedUser => {
      if (authenticatedUser) {
        setAuthUser(authenticatedUser);
      } else {
        setAuthUser(null);
      }
    });
  }, [authUser]);

  return (
    <AuthUserContext.Provider value={authUser}>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Pages.Home} />
          <Route exact path={ROUTES.LOGIN} component={Pages.Login} />
          <Route exact path={ROUTES.SIGNUP} component={Pages.Register} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            component={Pages.PasswordForget}
          />
          <ProtectedRoute
            exact
            path={ROUTES.SESSIONS}
            component={Pages.Sessions}
          />
          <Route component={Pages.NotFound} />
        </Switch>
      </Router>
    </AuthUserContext.Provider>
  );
};

export default AppRouter;
