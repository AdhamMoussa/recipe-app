import * as Font from 'expo-font';

export const loadFonts = (): Promise<void> => {
  return Font.loadAsync({
    'rainbows': require('../../assets/fonts/roundy-rainbows.ttf')
  });
};
