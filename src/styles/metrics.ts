import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');

const figmaWidth = 375;

const pixels = (valuePx: number) => {
  const percent = (valuePx * figmaWidth) / 100;
  const screenPixel = PixelRatio.roundToNearestPixel((width * percent) / 100);

  return screenPixel;
};

export const metrics = { pixels };
