import styled from 'styled-components';
import {fontSize, fontWeight, textStyle, typography} from 'styled-system';
import {boxCompose} from './';

export const Txt = styled.Text`
  ${typography}
  ${textStyle}
  ${boxCompose}
  ${fontSize}
  ${fontWeight}
`;

Txt.defaultProps = {color: 'textColorPrimary'};
