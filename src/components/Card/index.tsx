import React, { useCallback } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from '..';

import { IWeather } from '../../interfaces/Weather';

import {
  Container,
  ContainerGraus,
  ContainerTemps,
  ContainerDate,
  ContainerHumidity,
  Icon,
} from './styles';

import { theme } from '../../styles';

interface CardProps {
  infos: IWeather;
}

export const Card = ({ infos }: CardProps) => {
  const navigation = useNavigation();

  function formatDegraus(graus: number) {
    const toDegraus = parseInt(String(graus - 275), 10);

    return toDegraus.toString();
  }

  const handlePress = useCallback(
    (waether: IWeather) => {
      navigation.navigate('Details', { waether });
    },
    [navigation],
  );

  return (
    <Container onPress={() => handlePress(infos)}>
      <ContainerTemps>
        <ContainerGraus>
          <CustomText
            fontFamily={theme.fonts.BOLD}
            fontSize={5}
            color={theme.colors.BLACK}
          >
            {formatDegraus(infos?.main?.temp)}
          </CustomText>
          <CustomText
            fontFamily={theme.fonts.BOLD}
            fontSize={3}
            color={theme.colors.GREEN}
          >
            &deg;
          </CustomText>
        </ContainerGraus>
        <CustomText
          fontFamily={theme.fonts.BOLD}
          fontSize={1}
          color={theme.colors.GREEN_DARK}
          style={{ width: 100 }}
        >
          {infos.weather[0].description}
        </CustomText>
        <CustomText
          fontFamily={theme.fonts.BOLD}
          fontSize={1}
          color={theme.colors.GREEN}
        >
          {`${infos.name}, ${infos.sys.country}`}
        </CustomText>
      </ContainerTemps>
      {infos?.weather?.length > 0 && (
        <Icon
          width={50}
          height={50}
          source={{
            uri: `http://openweathermap.org/img/wn/${infos.weather[0].icon}@2x.png`,
          }}
        />
      )}
      <ContainerDate>
        <ContainerHumidity>
          <MaterialCommunityIcons
            name="water"
            size={20}
            color={theme.colors.WHITE}
          />
          <CustomText
            fontFamily={theme.fonts.BOLD}
            fontSize={1}
            color={theme.colors.WHITE}
          >
            {`${infos.main.humidity}`}
          </CustomText>
          <CustomText
            fontFamily={theme.fonts.BOLD}
            fontSize={1}
            color={theme.colors.WHITE}
          >
            %
          </CustomText>
        </ContainerHumidity>
        <ContainerTemps>
          <CustomText
            fontFamily={theme.fonts.BOLD}
            fontSize={3}
            color={theme.colors.GREEN_MEDIUM}
          >
            30
          </CustomText>
          <CustomText
            fontFamily={theme.fonts.BOLD}
            fontSize={1.5}
            color={theme.colors.GREEN_DARKEN}
            style={{ marginTop: -10 }}
          >
            MON
          </CustomText>
        </ContainerTemps>
      </ContainerDate>
    </Container>
  );
};
