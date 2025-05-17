import { DefaultTheme } from 'react-native-paper';

export const colors = {
  primary: '#2196F3',
  secondary: '#03A9F4',
  background: '#f5f5f5',
  surface: '#ffffff',
  text: '#000000',
  error: '#B00020',
  success: '#4CAF50',
  warning: '#FFC107',
  info: '#2196F3',
  disabled: '#9E9E9E',
  placeholder: '#757575',
  backdrop: 'rgba(0, 0, 0, 0.5)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
  caption: {
    fontSize: 12,
  },
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
    background: colors.background,
    surface: colors.surface,
    text: colors.text,
    error: colors.error,
  },
  spacing,
  typography,
}; 