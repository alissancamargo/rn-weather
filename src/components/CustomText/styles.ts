import styled from 'styled-components/native';

import { CustomTextProps } from '.';

import { theme } from '../../styles';

export const Text = styled.Text`
  font-size: ${(props: CustomTextProps) =>
    theme.metrics.pixels(props.fontSize)}px;
  color: ${(props: CustomTextProps) => props.color || theme.colors.BLACK};
  font-family: ${(props: CustomTextProps) => props.fontFamily || 'regular'};
`;
