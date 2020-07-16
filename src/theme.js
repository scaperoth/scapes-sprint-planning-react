import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import './fonts';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: { main: '#4a148c' },
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
  animations: {
    rise: {
      name: '$rise',
      keyframes: perc => ({
        '@keyframes rise': {
          '0%': {
            opacity: 0,
            transform: `translateY(${perc})`,
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }),
    },
    fadeIn: {
      name: '$fadeIn',
      keyframes: {
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
});

export default theme;
