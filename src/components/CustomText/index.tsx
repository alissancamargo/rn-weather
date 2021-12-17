import React from 'react';
import { TextProps } from 'react-native';

import { theme } from '../../styles';

import { Text } from './styles';

export interface CustomTextProps extends TextProps {
  children: string;
  fontSize: number;
  fontFamily: string;
  color: string;
}

export function CustomText({
  children,
  fontSize,
  fontFamily,
  color,
  ...rest
}: CustomTextProps) {
  return (
    <Text fontSize={fontSize} fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </Text>
  );
}
