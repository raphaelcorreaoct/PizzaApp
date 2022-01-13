import React from 'react';

import Details from './screens/Details';
import {Box} from './components';
import {ThemeProvider} from 'styled-components';
import theme from './components/Theme';

import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import {ActivityIndicator} from 'react-native';

const App = () => {
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? (
        <Box flex={1} alignItem="center" justifyContent="center">
          <ActivityIndicator />
        </Box>
      ) : (
        <Details />
      )}
    </ThemeProvider>
  );
};

export default App;
