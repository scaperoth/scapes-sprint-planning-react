import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from '../pages';
import ProtectedRoute from './ProtectedRoute';
import * as Routes from '../constants/routes';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={Routes.HOME} component={Pages.Home} />
      <Route path={Routes.LOGIN} component={Pages.Login} />
      <Route path={Routes.LOGOUT} component={Pages.Logout} />
      <Route path={Routes.SIGNUP} component={Pages.Register} />
      <Route path={Routes.PASSWORD_FORGET} component={Pages.PasswordForget} />
      <ProtectedRoute
        exact
        path={Routes.SESSIONS}
        component={Pages.PlanningSessions}
      />
      <ProtectedRoute
        path={Routes.CREATE_SESSION}
        component={Pages.PlanningSessionCreate}
      />
      <ProtectedRoute
        exact
        path={Routes.UPDATE_SESSION()}
        component={Pages.PlanningSessionUpdate}
      />
      <ProtectedRoute
        path={Routes.START_SESSION()}
        component={Pages.PlanningSessionStart}
      />
      <Route component={Pages.NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
