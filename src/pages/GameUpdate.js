import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PageLayout from '../components/layout/MenuContainer';
import GameUpdateForm from '../components/game/UpdateForm';
import * as Routes from '../constants/routes';
import PageHeader from '../components/content/PageHeader';
import { AuthUserContext } from '../common/providers/AuthUserProvider';

const GameUpdate = () => (
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
          title="Update Game"
          subtitle="Update your game configuration"
        />
      </Grid>
      <Grid item xs={9}>
        <AuthUserContext.Consumer>
          {({ authUser }) =>
            authUser && <GameUpdateForm authUser={authUser} />
          }
        </AuthUserContext.Consumer>
      </Grid>
    </Grid>
  </PageLayout>
);

export default GameUpdate;
