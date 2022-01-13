import styled from 'styled-components/native';
import {
  borders,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  zIndex,
} from 'styled-system';

export const boxCompose = compose(
  space,
  color,
  layout,
  flexbox,
  borders,
  position,
  zIndex,
  shadow,
);

export const Box = styled.View`
  ${boxCompose};
`;

export const TouchableBox = styled.TouchableOpacity`
  ${boxCompose};
`;

export default Box;
