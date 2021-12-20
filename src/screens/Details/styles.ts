import styled from 'styled-components/native';

import { theme } from '../../styles';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background-color: ${theme.colors.GREEN_LIGHT};
  flex-direction: column;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const HeaderItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ContentLeft = styled.View`
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const ContentRight = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerGraus = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 5px;
`;

export const Icon = styled.Image`
  margin-left: -14px;
  margin-right: 14px;
  width: 80px;
  height: 80px;
`;

export const ArrowBack = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${theme.colors.DARK};
  margin-top: 40px;
`;
