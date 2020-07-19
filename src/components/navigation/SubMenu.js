import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
}));

const SubMenu = ({ onClick }) => {
  const classes = useStyles();
  const menuItems = [
    { name: 'Games', link: '/games', Icon: ListAltIcon },
  ];

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={onClick()}
      onKeyDown={onClick()}
    >
      <List>
        {menuItems.map(item => (
          <ListItem button component={Link} to={item.link} key={item.name}>
            <ListItemIcon>
              <item.Icon />
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
