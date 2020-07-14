import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import PageLayout from '../components/Layout/PageLayout';
import SessionCreateForm from '../components/Forms/PlanningSessionCreateForm';
import * as Routes from '../constants/routes';

const SessionCreate = () => (
  <PageLayout>
    <Grid container spacing={2} justify="center">
      <Grid item xs={9}>
        <Button
          color="primary"
          startIcon={<ArrowBackIcon color="primary" />}
          href={Routes.SESSIONS}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={9}>
        <Typography component="h3" variant="h3">
          Create Planning Session
        </Typography>
        <Typography component="h5" variant="h5">
          Choose your session configuration
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <SessionCreateForm />
      </Grid>
    </Grid>
  </PageLayout>
);

export default SessionCreate;
