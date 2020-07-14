import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SubMenu from './SubMenu';
import AccountMenu from './AccountMenu';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  menu: {
    margin: theme.spacing(0, 0, 5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = () => {
  const anchorPosition = 'left';
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDrawer = toggleOpen => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setMenuOpen(toggleOpen);
  };

  return (
    <div className={classes.root}>
      <Drawer
        anchor={anchorPosition}
        open={menuOpen}
        onClose={toggleDrawer(false)}
      >
        <SubMenu onClick={toggleDrawer} />
      </Drawer>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Scapes Sprint Planning
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
