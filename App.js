import React from 'react';

import Details from './screens/Details';
import {Box} from './components';
import {ThemeProvider} from 'styled-components';
import theme from './components/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  );
};

export default App;
