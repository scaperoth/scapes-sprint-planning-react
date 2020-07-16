import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import './fonts';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    danger: orange,
    error: red,
  },
  timing: ['0s', '.1s', '.2s', '.3s', '.4s', '.5s'],
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
