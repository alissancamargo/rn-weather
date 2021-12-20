import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content, List, Title, Loading } from './styles';

import { theme } from '../../styles';
import { Card } from '../../components';
import { IWeather } from '../../store/modules/weather/types';
import { StoreState } from '../../store';
import {
  getWeatherByLatLongRequest,
  getWeatherRequest,
} from '../../store/modules/weather/actions';

const Home = () => {
  const dispatch = useDispatch();

  const weathersReducer = useSelector(
    (state: StoreState) => state.weather.weathers,
  );
  const weatherReducer = useSelector(
    (state: StoreState) => state.weather.weather,
  );
  const loading = useSelector((state: StoreState) => state.weather.loading);

  const [weathers, setWeathers] = useState<IWeather[]>([]);

  const [myLocation, setMyLocation] = useState<IWeather | null>(null);

  useEffect(() => {
    dispatch(getWeatherRequest());
  }, [dispatch]);

  useEffect(() => {
    if (weathersReducer.length > 0) {
      setWeathers(weathersReducer);
    }
  }, [weathersReducer]);

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
      dispatch(
        getWeatherByLatLongRequest(
          newLocation.coords.latitude,
          newLocation.coords.longitude,
        ),
      );
    })();
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(weatherReducer).length > 0) {
      setMyLocation(weatherReducer);
    }
  }, [weatherReducer]);

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
