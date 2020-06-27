import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from '../pages';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route exact path="/login" component={Pages.Login} />
      <Route exact path="/sessions" component={Pages.Sessions} />
      <Route component={Pages.NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
