import React from "react";
import { View, Text, StatusBar } from "react-native";
import { BottomBarStyleSheet as styles } from "./BottomBar.styles";

export const BottomBar: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Bottom{StatusBar.currentHeight}</Text>
    </View>
  );
};
