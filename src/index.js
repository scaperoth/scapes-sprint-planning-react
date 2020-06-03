import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from './router';
import store from './state/store';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <CssBaseline />
    <AppRouter />
  </Provider>,
  rootElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
