import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AccountMenu from './AccountMenu';
import * as Routes from '../../constants/routes';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  menu: {
    margin: theme.spacing(0, 0, 5),
    boxShadow: 'none',
  },
  title: {
    flexGrow: 1,
    fontWeight: 900,
  },
}));

const MenuAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="sticky" className={classes.menu}>
        <Container maxWidth={'lg'}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link color="inherit" href={Routes.HOME} className={classes.logo}>
                Scapes Sprint Planning
              </Link>
            </Typography>
            <AccountMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
