import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: '220px',
  },
  animation: {
    animation: `${theme.animations.placeholderShimmer.name} 1.8s linear infinite`,
    background:
      'linear-gradient(to right, #f7f7f7 8%, #f1f1f1 38%, #f7f7f7 54%)',
    backgroundSize: '1000px 100%',
    position: 'relative',
  },
  title: {
    top: '0px',
    left: '0px',
    height: '24px',
    width: '100%',
  },
  body: {
    top: '20px',
    left: '0px',
    height: '84px',
    width: '100%',
  },
  actions: {
    top: '50px',
    left: '0px',
    height: '24px',
    width: '25%',
  },
  ...theme.animations.placeholderShimmer.keyframes,
}));

const GameLoadingList = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      {[...Array(4)].map((e, i) => (
        <Grid item xs={12} md={6} key={i}>
          <Card className={classes.card}>
            <CardContent>
              <div className={clsx(classes.animation, classes.title)} />
              <div className={clsx(classes.animation, classes.body)} />
              <div className={clsx(classes.animation, classes.actions)} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameLoadingList;
