import React from 'react';
import {
  TouchableOpacity,
  Text as TextComponent,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheetProperties,
} from 'react-native';

import { TextSize, TextStyleSheet as styles, TextVariant } from './Text.styles';

export interface TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  size?: TextSize;
  variant?: TextVariant;
}

export const Text: React.FC<TextProps> = ({
  onPress,
  style,
  textStyle,
  children,
  size,
  variant = TextVariant.Bold,
}) => {
  const textComponent = (
    <TextComponent
      style={{
        ...styles.container,
        ...(size ? styles[size] : {}),
        ...((!onPress ? style : {}) as StyleSheetProperties),
        ...(textStyle as StyleSheetProperties),
        ...(variant ? styles[variant] : {}),
      }}>
      {children}
    </TextComponent>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress} style={style as StyleProp<ViewStyle>}>
      {textComponent}
    </TouchableOpacity>
  ) : (
    textComponent
  );
};
