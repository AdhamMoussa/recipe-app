import * as Font from 'expo-font';

export const loadFont = (): Promise<void> => {
  return Font.loadAsync({
    'rainbows': require('../../assets/fonts/roundy-rainbows.ttf')
  });
};
