import React from 'react';
import { Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { Box, Txt } from '../components';
import Primarybutton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Details = () => {
  const theme = useTheme();

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingHorizontal: theme.space.large,
        paddingBottom: 50 + theme.space.medium,
      }}>
      <Box flexDirection="row" justifyContent="space-between" mt="medium">
        <Primarybutton width={60} height={60}>
          <Image source={require('../assets/icons/icon-angle.png')} />
        </Primarybutton>
        <Primarybutton width={60} height={60}>
          <Image source={require('../assets/icons/icon-heart.png')} />
        </Primarybutton>
      </Box>
      <Box>
        <Box
          position="absolute"
          top={40}
          bg="surfaceSecondary"
          px="medium"
          py="small"
          borderRadius={40}
          zIndex={1}>
          <Txt fontSize="small" fontFamily="bold" color="onSurfaceSecondary">
            Popular
          </Txt>
        </Box>

        <Image source={require('../assets/images/Place_1.png')} />
      </Box>
      <Box flexDirection="row" justifyContent="space-between" mb="medium">
        <Txt fontSize="large" fontFamily="bold">
          Pizza Margerita
        </Txt>
        <Txt fontSize="large" color="textColorSecondary" fontFamily="bold">
          $18.95
        </Txt>
      </Box>

      <Box flexDirection="row" mb="medium">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Image source={require('../assets/icons/icon-star.png')} />
          <Txt fontSize="medium" fontFamily="bold" ml="small">
            4.8
          </Txt>
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          ml="medium">
          <Image source={require('../assets/icons/icon-clock.png')} />
          <Txt fontSize="medium" fontFamily="bold" ml="small">
            11 min
          </Txt>
        </Box>
      </Box>

      <Box>
        <Txt fontSize="medium" fontFamily="bold" mb="medium">
          About
        </Txt>

        <Txt fontSize="nano" color="textColorTertiary">
          A pizza margerita as the Italians call it a simple pizza hailinf from
          naples , the taste is of bread cheese and a tomato sauce made with
          ripes yomatoes the ...
        </Txt>
      </Box>

      <Box my="medium">
        <Txt fontSize="nano" fontFamily="bold" mb="small">
          Quantity
        </Txt>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <SecondaryButton width={44} height={44}>
                <Txt>-</Txt>
              </SecondaryButton>
              <TextInput
                value="1"
                style={[{ fontSize: theme.fontSizes.nano }, styles.input]}
              />
              <SecondaryButton width={44} height={44}>
                <Txt>+</Txt>
              </SecondaryButton>
            </Box>
          </Box>
          <Primarybutton height={60} bg="surfaceSecondary">
            <Txt
              color="onSurfaceSecondary"
              fontSize="nano"
              fontFamily="bold"
              px="medium">
              Order Now
            </Txt>
          </Primarybutton>
        </Box>
      </Box>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    width: 44,
    height: 44,
    textAlign: 'center',
  },
});

export default Details;
