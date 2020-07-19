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
        path={Routes.GAMES}
        component={Pages.Games}
      />
      <ProtectedRoute
        path={Routes.CREATE_GAME}
        component={Pages.GameCreate}
      />
      <ProtectedRoute
        exact
        path={Routes.UPDATE_GAME()}
        component={Pages.GameUpdate}
      />
      <ProtectedRoute
        path={Routes.START_GAME()}
        component={Pages.GameStart}
      />
      <Route component={Pages.NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
