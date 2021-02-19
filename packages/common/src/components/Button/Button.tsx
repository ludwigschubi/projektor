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

import { ButtonStyleSheet as styles } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  children,
  textStyle,
}) => {
  if (typeof children === 'string') {
    children = (
      <Text
        size={TextSize.Medium}
        variant={TextVariant.Bold}
        style={{ ...styles.text, ...(textStyle as StyleSheetProperties) }}>
        {children}
      </Text>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, ...(style as StyleSheetProperties) }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
