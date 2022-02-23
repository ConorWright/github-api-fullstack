import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <Grommet theme={hpe}>
      <AppHeader></AppHeader>
    </Grommet>
  );
}

export default App;
