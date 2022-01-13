import {
  DefaultTheme as NavigationDefault,
  DarkTheme as NavigationDark,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import Palette from './Palette';

export type Theme = {
  colors: {
    secondary: string;
    tabBar: string;
    hovered: string;
    pressed: string;
    inactive: string;
    textSecondary: string;
  };
} & NavigationTheme;

export const LightTheme: Theme = {
  ...NavigationDefault,
  colors: {
    primary: Palette.brand,
    secondary: Palette.gray200,
    background: Palette.gray50,
    card: Palette.white,
    text: Palette.gray900,
    border: Palette.white,
    notification: Palette.brand,

    tabBar: Palette.white,
    hovered: Palette.gray200,
    pressed: Palette.gray75,
    inactive: Palette.gray200,
    textSecondary: Palette.gray400,
  },
};

export const DarkTheme: Theme = {
  ...NavigationDark,
  colors: {
    primary: Palette.brand,
    secondary: Palette.gray600,
    background: Palette.black,
    card: Palette.gray900,
    text: Palette.gray100,
    border: Palette.black,
    notification: Palette.brand,

    tabBar: Palette.gray900,
    hovered: Palette.gray700,
    pressed: Palette.gray600,
    inactive: Palette.gray500,
    textSecondary: Palette.gray200,
  },
};
