import React from 'react';
import { Formik } from 'formik';
import {
  StyleProp,
  StyleSheetProperties,
  View,
  ViewStyle,
  TextInput,
} from 'react-native';

import {
  ProfilePicture,
  Text,
  TextSize,
  TextVariant,
} from '../../../components';

import {
  EditProfilePageStyleSheet as styles,
  EditProfileFormStyleSheet as formStyles,
} from './EditProfilePage.styles';
import { useCurrentUser } from '../../../context';
import { useGetCurrentProfileQuery } from '../../../resolvers';
import { FormInput } from '../../../components/FormInput';

export interface EditProfilePageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export interface EditProfileFormProps {
  style?: StyleProp<ViewStyle>;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({ style }) => {
  const { data: user } = useGetCurrentProfileQuery();
  return (
    <View
      style={
        {
          ...formStyles.container,
          ...(style as StyleSheetProperties),
        } as StyleProp<ViewStyle>
      }>
      <Formik
        initialValues={{
          name: user?.name,
          bio: user?.bio,
          link: user?.link,
          picture: user?.picture,
        }}
        onSubmit={() => {
          console.debug('Submitted');
        }}>
        {({ handleSubmit, handleChange, values }) => (
          <>
            <FormInput
              label="Username"
              value={values.name}
              onChange={handleChange('name')}
            />
            <FormInput
              label="Name"
              value={values.name}
              onChange={handleChange('name')}
            />
            <FormInput
              label="Bio"
              value={values.bio}
              onChange={handleChange('bio')}
            />
            <FormInput
              label="Link"
              value={values.link}
              inputStyle={formStyles.input}
              onChange={handleChange('link')}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export const EditProfilePage: React.FC<EditProfilePageProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.headContainer}>
          <ProfilePicture
            style={styles.profilePictureContainer}
            pictureStyle={styles.profilePicture}
          />
          <Text size={TextSize.Medium} textStyle={styles.changePicture}>
            Change profile picture
          </Text>
        </View>
        <EditProfileForm />
      </View>
    </View>
  );
};
