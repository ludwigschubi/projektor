import React from "react";
import {
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { IconStyleSheet as styles } from "./Icon.styles";

interface IconProps {
  icon: ImageSourcePropType;
  activeIcon?: ImageSourcePropType;
  active?: boolean;
  onPress?: () => void;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  activeIcon,
  active,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {active && activeIcon ? (
          <Image source={activeIcon} style={styles.logo} />
        ) : (
          <Image source={icon} style={styles.logo} />
        )}
      </View>
    </TouchableOpacity>
  );
};
