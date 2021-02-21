import React from 'react';
import { View, Linking } from 'react-native';

import { useGetCurrentProfileQuery } from '../../../resolvers';
import { Page } from '../../Page';
import {
  Button,
  ProfilePicture,
  ProfileStatistics,
  Text,
  TextSize,
  TextVariant,
} from '../../../components';
import { ButtonVariant } from '../../../components/Button/Button.styles';

import { EditProfilePageStyleSheet as styles } from './EditProfilePage.styles';

export interface EditProfilePageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export const EditProfilePage: React.FC<EditProfilePageProps> = ({
  ...props
}) => {
  const { data: user, isLoading } = useGetCurrentProfileQuery();
  return (
    <View style={styles.container}>
      {/*<View style={styles.profileContainer}>
          <View style={styles.headContainer}>
            <ProfilePicture
              style={styles.profilePictureContainer}
              pictureStyle={styles.profilePicture}
            />
            <ProfileStatistics />
          </View>
          <View style={styles.infoContainer}>
            <Text size={TextSize.Medium} style={styles.name}>
              {user?.name}
            </Text>
            {user?.bio && (
              <Text
                size={TextSize.Medium}
                variant={TextVariant.Regular}
                style={styles.bio}>
                {user?.bio}
              </Text>
            )}
            {user?.link && (
              <Text
                size={TextSize.Medium}
                style={styles.link}
                onPress={() => Linking.openURL(user?.link)}>
                {user?.link}
              </Text>
            )}
          </View>
          <View style={styles.profileButtonContainer}>
            <Button
              onPress={() => props.navigation.navigate('Profile')}
              variant={ButtonVariant.Secondary}
              style={styles.editProfileButton}>
              Edit Profile
            </Button>
          </View>
        </View> */}
    </View>
  );
};
