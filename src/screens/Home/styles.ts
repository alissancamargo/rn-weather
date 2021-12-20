import styled from 'styled-components/native';
import { CustomText } from '../../components';
import { theme } from '../../styles';

export const Container = styled.SafeAreaView`
  background-color: ${theme.colors.GREEN_LIGHTER};
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 20px;
  background-color: ${theme.colors.GREEN_LIGHTER};
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  flex: 1;
  padding-bottom: 40px;
`;

export const Title = styled(CustomText)`
  align-self: center;
  margin-bottom: 20px;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 100%;
`;
