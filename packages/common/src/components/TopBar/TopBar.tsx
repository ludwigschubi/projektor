import React from 'react';
import { View, Image, ViewStyle, StyleProp } from 'react-native';

import { TopBarStyleSheet as styles } from './TopBar.styles';
const projektorLogo = '../../../src/assets/images/Projektor Font Logo.jpg';

interface TopBarProps {
  style?: StyleProp<ViewStyle>;
}

export const TopBar: React.FC<TopBarProps> = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...(style as object) }}>
      <Image source={require(projektorLogo)} style={styles.logo} />
    </View>
  );
};
