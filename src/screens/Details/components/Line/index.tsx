import React from 'react';
import { CustomText } from '../../../../components';
import { theme } from '../../../../styles';

import { Container } from './styles';

interface LineProps {
  label: string;
  value: string;
}

export const Line = ({ label, value }: LineProps) => {
  return (
    <Container>
      <CustomText
        color={theme.colors.DARK}
        fontSize={1}
        fontFamily={theme.fonts.BOLD}
      >
        {`${label}: `}
      </CustomText>
      <CustomText
        color={theme.colors.DARK}
        fontSize={1}
        fontFamily={theme.fonts.REGULAR}
      >
        {value}
      </CustomText>
    </Container>
  );
};
