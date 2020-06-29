import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthService } from '../state/services';
import { AuthUserContext } from '../components/Context';
import Pages from '../pages';
import ProtectedRoute from './ProtectedRoute';
import * as ROUTES from '../constants/routes';
import { logout } from '../state/services/auth.service';

const AppRouter = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    AuthService.onAuthChanged(authenticatedUser => {
      if (authenticatedUser) {
        setAuthUser(authenticatedUser);
      } else {
        setAuthUser(null);
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <AuthUserContext.Provider value={{ authUser, auth }}>
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
