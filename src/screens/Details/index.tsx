import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  HeaderItem,
  Content,
  ContentLeft,
  ContentRight,
  Icon,
  ContainerGraus,
  ArrowBack,
} from './styles';
import { CustomText } from '../../components';
import { theme } from '../../styles';
import { formatDegraus } from '../../utils/formatToCelsius';
import { Line } from './components/Line';
import { toCapitalize } from '../../utils/capitalize';
import { toDate, toHour } from '../../utils/formatDate';
import { IWeather } from '../../store/modules/weather/types';

function Details() {
  const route = useRoute();
  const { goBack } = useNavigation();

  const weatherParams = route.params as IWeather;

  const [myLocation, setMyLocation] = useState<IWeather | null>(null);

  useEffect(() => {
    if (weatherParams) {
      setMyLocation(weatherParams);
    }
  }, [weatherParams]);

  return (
    <Container>
      {myLocation && (
        <>
          <CustomText
            color={theme.colors.DARK}
            fontSize={2}
            fontFamily={theme.fonts.BOLD}
          >
            {`${myLocation.name}, ${myLocation.sys.country}`}
          </CustomText>
          <Header>
            <HeaderItem>
              <AntDesign name="calendar" size={16} color="black" />
              <CustomText
                color={theme.colors.DARK}
                fontSize={1.3}
                fontFamily={theme.fonts.BOLD}
                style={{ marginLeft: 5 }}
              >
                {`${toDate(new Date())}`}
              </CustomText>
            </HeaderItem>
            <HeaderItem>
              <AntDesign name="clockcircleo" size={16} color="black" />
              <CustomText
                color={theme.colors.DARK}
                fontSize={1.3}
                fontFamily={theme.fonts.BOLD}
                style={{ marginLeft: 5 }}
              >
                {`${toHour(new Date())}`}
              </CustomText>
            </HeaderItem>
          </Header>
          <Content>
            <ContentLeft>
              <Line
                label="Clima"
                value={`${toCapitalize(myLocation.weather[0]?.description)}`}
              />
              <Line label="Umidade" value={`${myLocation.main.humidity}%`} />
              <Line label="Vento" value={`${myLocation.wind.speed} km`} />
              <Line
                label="Temp. Mínima"
                value={`${formatDegraus(myLocation.main.temp_min)}°`}
              />
              <Line
                label="Temp. Máxima"
                value={`${formatDegraus(myLocation.main.temp_max)}°`}
              />
              <Line
                label="Sensação Térmica"
                value={`${formatDegraus(myLocation.main.feels_like)}°`}
              />
              <Line label="Pressão" value={`${myLocation.main.pressure} hPa`} />
              <Line label="Latitude" value={`${myLocation.coord.lat}`} />
              <Line label="Longitude" value={`${myLocation.coord.lon}`} />
            </ContentLeft>
            <ContentRight>
              <ContainerGraus>
                <CustomText
                  fontFamily={theme.fonts.BOLD}
                  fontSize={2}
                  color={theme.colors.BLACK}
                >
                  {formatDegraus(myLocation?.main?.temp)}
                </CustomText>
                <CustomText
                  fontFamily={theme.fonts.BOLD}
                  fontSize={2}
                  color={theme.colors.BLACK}
                >
                  &deg;
                </CustomText>
              </ContainerGraus>

              <Icon
                width={50}
                height={50}
                source={{
                  uri: `http://openweathermap.org/img/wn/${myLocation.weather[0].icon}@2x.png`,
                }}
              />
            </ContentRight>
          </Content>
          <ArrowBack onPress={() => goBack()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={theme.colors.GREEN_LIGHT}
            />
          </ArrowBack>
        </>
      )}
    </Container>
  );
}

export default Details;
