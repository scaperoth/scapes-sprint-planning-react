import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PageLayout from '../components/Layout/PageLayout';
import SessionList from '../components/SessionList';
import * as Routes from '../constants/routes';

const PlanningSessions = () => (
  <PageLayout>
    <Grid container spacing={2} justify="center">
      <Grid item xs={9}>
        <Typography component="h4" variant="h3">
          My Planning Sessions
        </Typography>
        <Typography variant="h5">
          Get started here
        </Typography>
        <Typography variant="body1" gutterBottom>
          Click on any session that you would like to start or continue.
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Button
          color="primary"
          startIcon={<AddCircleIcon color="primary" />}
          href={Routes.CREATE_SESSION}
        >
          Add New Planning Session
        </Button>
      </Grid>
      <Grid item xs={9}>
        <SessionList />
      </Grid>
    </Grid>
  </PageLayout>
);

export default PlanningSessions;
