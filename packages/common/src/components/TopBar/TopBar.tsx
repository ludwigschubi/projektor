import React from "react";
import { View, Image } from "react-native";
import { TopBarStyleSheet as styles } from "./TopBar.styles";
const projektorLogo = "../../../src/images/logos/Projektor Font Logo.jpg";

export const TopBar: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={require(projektorLogo)} style={styles.logo} />
    </View>
  );
};
