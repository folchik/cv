import React from 'react';
import './App.css';
import Router from '../Router';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <Grid className="App" container columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Router />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
