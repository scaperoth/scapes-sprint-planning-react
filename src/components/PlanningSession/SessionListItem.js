import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold'
  },
  pos: {
    fontSize: 10,
  },
}));

const SessionListItem = ({ planningSession }) => {
  const classes = useStyles();

  const getDate = () => new Date(planningSession.createdAt).toDateString();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textPrimary">
              {planningSession.name}
            </Typography>
            <Typography
              className={classes.pos}
              color="textSecondary"
              gutterBottom
            >
              {getDate()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color={'primary'}>
              Start Session
            </Button>
            <Button size="small" color={'textPrimary'}>
              Delete Session
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

SessionListItem.propTypes = {
  planningSession: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    createdAt: PropTypes.number,
  }).isRequired,
};

export default SessionListItem;
