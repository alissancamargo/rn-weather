import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

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
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [myLocation, setMyLocation] = useState<IWeather | null>(null);

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

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Atenção!, A permissão para acessar a Localização foi negada',
        );
        return;
      }

      const newLocation = await Location.getCurrentPositionAsync({});
      setLocation(newLocation);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      async function handleMyLocation() {
        const response = await api.get(
          `weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=pt_br&appid=${weatherApiKey}`,
        );
        setMyLocation(response.data);
      }

      handleMyLocation();
    }
  }, [location]);

  if (loading) {
    return (
      <Container>
        <Loading color={theme.colors.BLACK} size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <Title
          color={theme.colors.DARK}
          fontSize={2}
          fontFamily={theme.fonts.BOLD}
        >
          Weather
        </Title>
        {myLocation && <Card infos={myLocation} />}
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
