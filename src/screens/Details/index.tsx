import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface DetailsProps {
  children: ReactNode;
}

function Details({ children }: DetailsProps) {
  return (
    <Container>
      <Text>Details</Text>
      {children}
    </Container>
  );
};

export default Details;
