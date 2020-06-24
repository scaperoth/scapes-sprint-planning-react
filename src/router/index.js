import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, NotFound, Sessions } from '../pages';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Home} />
      <Route exact path="/sessions" component={Sessions} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
