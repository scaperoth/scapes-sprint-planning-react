import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
}));

const SubMenu = ({ onClick }) => {
  const classes = useStyles();
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Sessions', link: '/sessions' },
  ];

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={onClick()}
      onKeyDown={onClick()}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button component={Link} to={item.link} key={item.name}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

SubMenu.defaultProps = {
  onClick: () => {},
};

SubMenu.propTypes = {
  onClick: PropTypes.func,
};

export default SubMenu;
