import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { useGetCurrentProfileQuery } from '../../resolvers';
import { Text, TextSize, TextVariant } from '../Text';

import { ProfileStatisticsStyleSheet as styles } from './ProfileStatistics.styles';

export const ProfileStatistics: React.FC = () => {
  const { data: user } = useGetCurrentProfileQuery();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.statistic}>
        <View>
          <Text size={TextSize.Large}>{user?.posts.length}</Text>
          <Text size={TextSize.Medium} variant={TextVariant.Regular}>
            Posts
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.statistic, ...{ marginLeft: 16 } }}>
        <View>
          <Text size={TextSize.Large}>{user?.followers.length}</Text>
          <Text size={TextSize.Medium} variant={TextVariant.Regular}>
            Followers
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.statistic, ...{ marginLeft: 16 } }}>
        <View>
          <Text size={TextSize.Large}>{user?.follows.length}</Text>
          <Text size={TextSize.Medium} variant={TextVariant.Regular}>
            Following
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
