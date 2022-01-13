import React from 'react';

import {TouchableBox} from './Box';

const Primarybutton = ({children, ...rest}) => {
  return (
    <TouchableBox
      borderRadius={20}
      alignItems="center"
      justifyContent="center"
      bg="surfacePrimary"
      style={{elevation: 6}}
      {...rest}>
      {children}
    </TouchableBox>
  );
};

export default Primarybutton;
