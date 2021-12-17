import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  ActivityIndicator,
  Text as TextRN,
  TouchableOpacity,
} from 'react-native';

import { Container, List } from './styles';
import { api } from '../../services/api';
import { weatherApiKey } from '../../config/env';
import { locations } from '../../constants/location';
import { CustomText } from '../../components/CustomText';
import { theme } from '../../styles';

function Home() {
  const { navigate } = useNavigation();

  const [weathers, setWeathers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let weathersList: any[] = [];

    async function loadWeather() {
      setLoading(true);
      for await (const locale of locations) {
        const element = locale;

        const response = await api.get(
          `weather?q=${element.city}&lang=pt_br&appid=${weatherApiKey}`,
        );

        weathersList.push(response.data);
      }

      setWeathers(weathersList);
      setLoading(false);
    }

    loadWeather();
  }, []);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator color={theme.colors.BLACK} size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <TextRN>Home</TextRN>
      <List
        data={weathers}
        keyExtractor={item => String(item.name)}
        renderItem={({ item }) => (
          <CustomText
            color={theme.colors.BLACK}
            fontFamily={theme.fonts.MEDIUM}
            fontSize={2}
          >
            {item.name}
          </CustomText>
        )}
      />

      <TouchableOpacity onPress={() => navigate('Details')}>
        <TextRN>Navegar</TextRN>
      </TouchableOpacity>
    </Container>
  );
}

export default Home;
