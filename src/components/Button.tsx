import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { colors, spacing } from '../theme';

interface ButtonProps {
  mode?: 'text' | 'outlined' | 'contained';
  onPress: () => void;
  children: React.ReactNode;
  style?: object;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  mode = 'contained',
  onPress,
  children,
  style,
  disabled = false,
  loading = false,
  icon,
}) => {
  return (
    <PaperButton
      mode={mode}
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled}
      loading={loading}
      icon={icon}
    >
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: spacing.sm,
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
}); 