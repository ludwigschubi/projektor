import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { useGetCurrentProfileQuery } from '../../resolvers';

import { ProfilePictureStyleSheet as styles } from './ProfilePicture.styles';

const defaultProfilePicture = require('../../../src/assets/icons/defaultProfileIcon.png');

interface ProfilePictureProps {
  active?: boolean;
  onPress?: () => void;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  active,
  onPress,
}) => {
  const { data: user } = useGetCurrentProfileQuery();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, ...(active ? styles.active : {}) }}>
        {user?.picture ? (
          <Image source={user?.picture} style={styles.logo} />
        ) : (
          <Image source={defaultProfilePicture} style={styles.logo} />
        )}
      </View>
    </TouchableOpacity>
  );
};
