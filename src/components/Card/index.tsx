import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <Container>
      <Text>Card</Text>
      {children}
    </Container>
  );
};

export default Card;
