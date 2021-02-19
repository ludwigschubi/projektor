import React from 'react';
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TouchableOpacity,
  StyleSheetProperties,
  StyleProp,
} from 'react-native';

import { useGetCurrentProfileQuery } from '../../resolvers';

import { ProfilePictureStyleSheet as styles } from './ProfilePicture.styles';

const defaultProfilePicture = require('../../../src/assets/icons/defaultProfileIcon.png');

interface ProfilePictureProps {
  active?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  pictureStyle?: StyleProp<ImageStyle>;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  active,
  onPress,
  style,
  pictureStyle,
}) => {
  const { data: user } = useGetCurrentProfileQuery();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.container,
          ...(active ? styles.active : {}),
          ...(style as StyleSheetProperties),
        }}>
        {user?.picture ? (
          <Image
            source={user?.picture}
            style={{
              ...styles.picture,
              ...(pictureStyle as StyleSheetProperties),
            }}
          />
        ) : (
          <Image
            source={defaultProfilePicture}
            style={{
              ...styles.picture,
              ...(pictureStyle as StyleSheetProperties),
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
