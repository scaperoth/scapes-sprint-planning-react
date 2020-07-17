import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PageLayout from '../components/Layout/MenuContainer';
import SessionUpdateForm from '../components/PlanningSession/UpdateForm';
import * as Routes from '../constants/routes';
import PageHeader from '../components/Content/PageHeader';
import AuthUserContext from '../components/Context/AuthUserContext';

const SessionUpdate = () => (
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
          title="Update Planning Session"
          subtitle="Update your session configuration"
        />
      </Grid>
      <Grid item xs={9}>
        <AuthUserContext.Consumer>
          {({ authUser }) =>
            authUser && <SessionUpdateForm authUser={authUser} />
          }
        </AuthUserContext.Consumer>
      </Grid>
    </Grid>
  </PageLayout>
);

export default SessionUpdate;
