import React from 'react';

import Details from './screens/Details';
import {ThemeProvider} from 'styled-components';
import theme from './components/Theme';
import Bottombar from './components/BottomBar';
import {Box} from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Details />
      <Bottombar />
    </ThemeProvider>
  );
};

export default App;
