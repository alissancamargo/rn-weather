import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

interface HomeProps {
  children: ReactNode;
}

function Home({ children }: HomeProps) {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Text>Home</Text>
      {children}
      <TouchableOpacity onPress={() => navigate('Details')}>
        <Text>Navegar</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Home;
