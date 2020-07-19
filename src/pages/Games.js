import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PageLayout from '../components/layout/MenuContainer';
import GameList from '../components/game/List';
import * as Routes from '../constants/routes';
import PageHeader from '../components/content/PageHeader';

const Games = () => (
  <PageLayout>
    <Grid container spacing={4} justify="center">
      <Grid item xs={9}>
        <PageHeader
          title="My Games"
          subtitle="Get started here"
          description="Click on any game that you would like to start or continue. Or you can add a new game here"
        />
      </Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          href={Routes.CREATE_GAME}
        >
          Add New Game
        </Button>
      </Grid>
      <Grid item xs={9}>
        <GameList />
      </Grid>
    </Grid>
  </PageLayout>
);

export default Games;
