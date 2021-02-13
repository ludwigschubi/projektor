import React from "react";
import { View, Text, StatusBar } from "react-native";
import { TopBarStyleSheet as styles } from "./TopBar.styles";

export const TopBar: React.FC = ({}) => {
  return (
    <View style={{ ...styles.container, paddingTop: StatusBar.currentHeight }}>
      <Text>Top</Text>
    </View>
  );
};
