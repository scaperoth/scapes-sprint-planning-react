import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRouter from './router';
import store from './state/store';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import AuthUserProvider from './common/providers/AuthUserProvider';
import AlertProvider from './common/providers/AlertProvider';
import './index.css';
import Snackbar from './components/alerts/Snackbar';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthUserProvider>
        <AlertProvider>
          <AppRouter />
          <Snackbar />
        </AlertProvider>
      </AuthUserProvider>
    </ThemeProvider>
  </Provider>,
  rootElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
