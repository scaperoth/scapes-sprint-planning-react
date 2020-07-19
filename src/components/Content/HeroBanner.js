import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Routes from '../../constants/routes';
import { AuthUserContext } from '../../common/providers/AuthUserProvider';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(20, 10, 6),
  },
  pageTitle: {
    fontWeight: 700,
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
          className={classes.pageTitle}
        >
          Scapes Planning Poker
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          TODO: Put tagline here...
        </Typography>
        <div className={classes.heroButtons}>
          <AuthUserContext.Consumer>
            {({ auth }) => (
              <Grid container spacing={2} justify="center">
                {auth.loggedin ? (
                  <Grid item>
                    <Button
                      component={RouterLink}
                      to={Routes.SESSIONS}
                      variant="contained"
                      color="primary"
                    >
                      Get Started
                    </Button>
                  </Grid>
                ) : (
                  <Fragment>
                    <Grid item>
                      <Button
                        component={RouterLink}
                        to={Routes.SIGNUP}
                        variant="contained"
                        color="primary"
                      >
                        Sign Up
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        component={RouterLink}
                        to={Routes.LOGIN}
                        variant="outlined"
                        color="primary"
                      >
                        Log In
                      </Button>
                    </Grid>
                  </Fragment>
                )}
              </Grid>
            )}
          </AuthUserContext.Consumer>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
