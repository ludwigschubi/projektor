import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import { IconStyleSheet as styles } from "./Icon.styles";

interface IconProps {
  icon: ImageSourcePropType;
  activeIcon?: ImageSourcePropType;
  active?: boolean;
}

export const Icon: React.FC<IconProps> = ({ icon, activeIcon, active }) => {
  return (
    <View style={styles.container}>
      {active && activeIcon ? (
        <Image source={activeIcon} style={styles.logo} />
      ) : (
        <Image source={icon} style={styles.logo} />
      )}
    </View>
  );
};
