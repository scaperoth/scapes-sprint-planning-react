import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Routes from '../constants/routes';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(20, 10, 6),
    fontFamily: 'OpenSans',
    fontWeight: 100,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const HeroBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Scapes Sprint Planning
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          TODO: Put tagline here...
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button href={Routes.SIGNUP} variant="contained" color="primary">
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Button href={Routes.LOGIN} variant="outlined" color="primary">
                Log In
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

HeroBanner.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default HeroBanner;
