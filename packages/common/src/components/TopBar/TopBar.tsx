import React from 'react';
import {
  View,
  Image,
  ViewStyle,
  StyleProp,
  StyleSheetProperties,
} from 'react-native';

import { TopBarStyleSheet as styles } from './TopBar.styles';
const projektorLogo = '../../../src/assets/images/Projektor Font Logo.jpg';

interface TopBarProps {
  style?: StyleProp<ViewStyle>;
}

export const TopBar: React.FC<TopBarProps> = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...(style as StyleSheetProperties) }}>
      <Image source={require(projektorLogo)} style={styles.logo} />
    </View>
  );
};
