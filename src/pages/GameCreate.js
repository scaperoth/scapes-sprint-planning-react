import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PageLayout from '../components/layout/MenuContainer';
import GameCreateForm from '../components/game/CreateForm';
import * as Routes from '../constants/routes';
import PageHeader from '../components/content/PageHeader';

const GameCreate = () => (
  <PageLayout>
    <Grid container spacing={2} justify="center">
      <Grid item xs={9}>
        <Button
          color="primary"
          startIcon={<ArrowBackIcon color="primary" />}
          href={Routes.GAMES}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={9}>
        <PageHeader
          title="Create Game"
          subtitle="Choose your game configuration"
          description="If you're not sure about what to put here, that's ok! You can always make changes later."
        />
      </Grid>
      <Grid item xs={9}>
        <GameCreateForm />
      </Grid>
    </Grid>
  </PageLayout>
);

export default GameCreate;
