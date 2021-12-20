import styled from 'styled-components/native';

import { theme } from '../../styles';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  /* border: 1px solid gray; */
  width: 100%;
  min-width: 100%;
  justify-content: space-around;
  padding: 20px 0;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: ${theme.colors.GREEN_LIGHT};
`;

export const ContainerGraus = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const ContainerTemps = styled.View`
  flex-direction: column;
`;

export const ContainerDate = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerHumidity = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.GREEN_DARK};
  height: 25px;
  border-radius: 50px;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Icon = styled.Image`
  margin-left: -14px;
  margin-right: 14px;
  width: 80px;
  height: 80px;
`;
