import React from 'react';
import {
  TouchableOpacity,
  Text as TextComponent,
  StyleProp,
  TextStyle,
} from 'react-native';

import { TextSize, TextStyleSheet as styles, TextVariant } from './Text.styles';

export interface TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  size?: TextSize;
  variant?: TextVariant;
}

export const Text: React.FC<TextProps> = ({
  onPress,
  style,
  children,
  size,
  variant = TextVariant.Bold,
}) => {
  const textComponent = (
    <TextComponent
      style={{
        ...styles.container,
        ...(style as object),
        ...(size ? styles[size] : {}),
        ...(variant ? styles[variant] : {}),
      }}>
      {children}
    </TextComponent>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress}>{textComponent}</TouchableOpacity>
  ) : (
    textComponent
  );
};
