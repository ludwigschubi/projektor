import React from "react";
import { View, Image } from "react-native";
import { TopBarStyleSheet as styles } from "./TopBar.styles";
const projektorLogo = "../../../src/images/logos/Projektor Font Logo.jpg";

interface TopBarProps {
  style?: CssProps;
}

export const TopBar: React.FC<TopBarProps> = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Image source={require(projektorLogo)} style={styles.logo} />
    </View>
  );
};
