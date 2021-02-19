import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheetProperties,
} from 'react-native';

import { Text } from '../Text';
import { TextSize, TextVariant } from '../Text/Text.styles';

import {
  ButtonStyleSheet as styles,
  ButtonTextStyleSheet as textStyles,
  ButtonVariant,
} from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  children,
  textStyle,
  variant = ButtonVariant.Primary,
}) => {
  if (typeof children === 'string') {
    children = (
      <Text
        size={TextSize.Medium}
        variant={TextVariant.Bold}
        style={{
          ...textStyles.text,
          ...(textStyle as StyleSheetProperties),
          ...textStyles[variant],
        }}>
        {children}
      </Text>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        ...(style as StyleSheetProperties),
        ...styles[variant],
      }}>
      <View>{children}</View>
    </TouchableOpacity>
  );
};
