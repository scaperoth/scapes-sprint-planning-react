import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Pages from '../pages';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.HOME} component={Pages.Home} />
      <Route exact path={ROUTES.LOGIN} component={Pages.Login} />
      <Route exact path={ROUTES.SIGNUP} component={Pages.Register} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={Pages.PasswordForget} />
      <Route exact path={ROUTES.SESSIONS} component={Pages.Sessions} />
      <Route component={Pages.NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
