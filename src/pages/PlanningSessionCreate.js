import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PageLayout from '../components/layout/MenuContainer';
import SessionCreateForm from '../components/planningSession/CreateForm';
import * as Routes from '../constants/routes';
import PageHeader from '../components/content/PageHeader';

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
        <PageHeader
          title="Create Planning"
          subtitle="Choose your session configuration"
          description="If you're not sure about what to put here, that's ok! You can always make changes later."
        />
      </Grid>
      <Grid item xs={9}>
        <SessionCreateForm />
      </Grid>
    </Grid>
  </PageLayout>
);

export default SessionCreate;
