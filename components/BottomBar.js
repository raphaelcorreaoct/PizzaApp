import React from 'react';
import {Image} from 'react-native';
import {Box, TouchableBox} from '.';

const Bottombar = () => {
  return (
    <Box
      width="100%"
      bottom={0}
      left={0}
      height={50}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px="large"
      position="absolute"
      bg="surfacePrimary">
      <TouchableBox>
        <Image source={require('../assets/icons/icon-home.png')} />
      </TouchableBox>
      <TouchableBox>
        <Image source={require('../assets/icons/icon-notification.png')} />
      </TouchableBox>
      <TouchableBox>
        <Image source={require('../assets/icons/icon-search.png')} />
      </TouchableBox>
      <TouchableBox>
        <Image source={require('../assets/icons/icon-heart.png')} />
      </TouchableBox>
      <TouchableBox>
        <Image source={require('../assets/icons/icon-cart.png')} />
      </TouchableBox>
    </Box>
  );
};

export default Bottombar;
