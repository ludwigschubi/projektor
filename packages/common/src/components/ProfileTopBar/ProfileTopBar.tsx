import React from 'react';
import { View, ViewStyle, StyleProp, StyleSheetProperties } from 'react-native';

import { useGetCurrentProfileQuery } from '../../resolvers';
import { Text } from '../Text';

import { ProfileTopBarStyleSheet as styles } from './ProfileTopBar.styles';

interface ProfileTopBarProps {
  style?: StyleProp<ViewStyle>;
}

export const ProfileTopBar: React.FC<ProfileTopBarProps> = ({ style }) => {
  const { data } = useGetCurrentProfileQuery() ?? { name: '' };
  return (
    <View style={{ ...styles.container, ...(style as StyleSheetProperties) }}>
      <Text style={styles.username}>{data?.name}</Text>
    </View>
  );
};
