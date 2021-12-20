import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <Container>
      <Text>Button</Text>
      {children}
    </Container>
  );
};
