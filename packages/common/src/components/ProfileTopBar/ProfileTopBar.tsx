import React from 'react';
import { View, ViewStyle, StyleProp, StyleSheetProperties } from 'react-native';

import { useGetCurrentProfileQuery } from '../../resolvers';
import { Text } from '../Text';

import { ProfileTopBarStyleSheet as styles } from './ProfileTopBar.styles';

interface ProfileTopBarProps {
  style?: StyleProp<ViewStyle>;
  shown: boolean;
}

export const ProfileTopBar: React.FC<ProfileTopBarProps> = ({
  style,
  shown,
}) => {
  const { data } = useGetCurrentProfileQuery() ?? { name: '' };
  return (
    <View
      style={{
        ...styles.container,
        ...(style as StyleSheetProperties),
        ...(shown ? {} : { display: 'none' }),
      }}>
      <Text style={styles.username}>{data?.name}</Text>
    </View>
  );
};
