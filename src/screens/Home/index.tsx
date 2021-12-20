import React, { useState, useEffect } from 'react';

import { Container, Content, List, Title, Loading } from './styles';
import { api } from '../../services/api';
import { weatherApiKey } from '../../config/env';
import { locations } from '../../constants/location';
import { theme } from '../../styles';
import { IWeather } from '../../interfaces/Weather';
import { Card } from '../../components';

const Home = () => {
  const [weathers, setWeathers] = useState<IWeather[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const weathersList: IWeather[] = [];

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
        <Loading color={theme.colors.BLACK} size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <Title
          color={theme.colors.DARK}
          fontSize={2}
          fontFamily={theme.fonts.BOLD}
        >
          Weather
        </Title>
        <List
          data={weathers}
          keyExtractor={(item: IWeather) => String(item.id)}
          renderItem={({ item }) => <Card infos={item as IWeather} />}
        />
      </Content>
    </Container>
  );
};

export default Home;
