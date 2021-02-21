import React from 'react';
import {
  View,
  Image,
  ViewStyle,
  StyleProp,
  StyleSheetProperties,
  StatusBar,
} from 'react-native';

import { colors } from '../../constants';

import { TopBarStyleSheet as styles } from './TopBar.styles';
const projektorLogo = '../../../src/assets/images/Projektor Font Logo.jpg';

interface TopBarProps {
  style?: StyleProp<ViewStyle>;
  shown: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ style, shown }) => {
  return (
    <View
      style={{
        ...styles.container,
        ...(style as StyleSheetProperties),
        ...(shown ? {} : { display: 'none' }),
      }}>
      <StatusBar backgroundColor={colors.white} />
      <Image source={require(projektorLogo)} style={styles.logo} />
    </View>
  );
};
