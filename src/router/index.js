import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthService } from '../state/services';
import { AuthUserContext } from '../components/Context';
import Pages from '../pages';
import ProtectedRoute from './ProtectedRoute';
import * as Routes from '../constants/routes';
import { logout } from '../state/actions/auth.actions';
import PlanningSessionCreateForm from '../components/Forms/PlanningSessionCreateForm';

const AppRouter = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
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
          <Route exact path={Routes.HOME} component={Pages.Home} />
          <Route path={Routes.LOGIN} component={Pages.Login} />
          <Route path={Routes.LOGOUT} component={Pages.Logout} />
          <Route path={Routes.SIGNUP} component={Pages.Register} />
          <Route
            path={Routes.PASSWORD_FORGET}
            component={Pages.PasswordForget}
          />
          <ProtectedRoute exact path={Routes.SESSIONS} component={Pages.Sessions} />
          <ProtectedRoute
            path={Routes.CREATE_SESSION}
            component={PlanningSessionCreateForm}
          />
          <Route component={Pages.NotFound} />
        </Switch>
      </Router>
    </AuthUserContext.Provider>
  );
};

export default AppRouter;
