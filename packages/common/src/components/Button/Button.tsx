import React from "react";
import { View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { Text } from "../Text";
import { TextSize } from "../Text/Text.styles";
import { ButtonStyleSheet as styles } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onPress, style, children }) => {
  if (typeof children === "string") {
    children = (
      <Text size={TextSize.Large} style={styles.text}>
        {children}
      </Text>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, ...(style as object) }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
