import React from 'react';

import {TouchableBox} from './Box';

const SecondaryButton = ({children, ...rest}) => {
  return (
    <TouchableBox
      borderRadius={10}
      alignItems="center"
      justifyContent="center"
      bg="surfaceTertiary"
      style={{elevation: 6}}
      {...rest}>
      {children}
    </TouchableBox>
  );
};

export default SecondaryButton;
