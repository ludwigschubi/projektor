import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { StyleProp, StyleSheetProperties, View, ViewStyle } from 'react-native';

import { ProfilePicture, Text, TextSize } from '../../../components';
import {
  EditProfileVariables,
  Profile,
  useEditProfileMutation,
  useGetCurrentProfileQuery,
} from '../../../resolvers';
import { FormInput } from '../../../components/FormInput';
import { useAppContext } from '../../../reducers';
import { USER_SET_PROFILE } from '../../../reducers/app/appActions';

import {
  EditProfilePageStyleSheet as styles,
  EditProfileFormStyleSheet as formStyles,
} from './EditProfilePage.styles';

export interface EditProfilePageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export type HandleFormChange = <T_1 = string | React.ChangeEvent<any>>(
  field: T_1,
) => T_1 extends React.ChangeEvent<any>
  ? void
  : (e: string | React.ChangeEvent<any>) => void;

export interface EditProfileFormProps {
  style?: StyleProp<ViewStyle>;
  values: EditProfileVariables;
  handleChange: HandleFormChange;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
  style,
  values,
  handleChange,
}) => {
  return (
    <View
      style={
        {
          ...formStyles.container,
          ...(style as StyleSheetProperties),
        } as StyleProp<ViewStyle>
      }>
      <FormInput
        label="Username"
        value={values?.webId}
        onChange={handleChange('webId')}
      />
      <FormInput
        label="Name"
        value={values?.name}
        onChange={handleChange('name')}
      />
      <FormInput
        label="Bio"
        value={values?.bio}
        onChange={handleChange('bio')}
      />
      <FormInput
        label="Link"
        value={values?.link}
        inputStyle={formStyles.input}
        onChange={handleChange('link')}
      />
    </View>
  );
};

export const EditProfilePage: React.FC<EditProfilePageProps> = ({
  navigation,
}) => {
  const { data: user } = useGetCurrentProfileQuery();
  const { dispatch } = useAppContext();
  const editProfileMutation = useEditProfileMutation();
  const formik = useFormik({
    initialValues: {
      webId: (user as Profile).webId,
      name: user?.name,
      bio: user?.bio,
      link: user?.link,
      picture: user?.picture,
    },
    onSubmit: (values) => {
      editProfileMutation.mutate(values as EditProfileVariables);
      navigation.goBack();
    },
  });

  useEffect(() => {
    dispatch({ type: USER_SET_PROFILE, payload: formik.handleSubmit });
  }, []);

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
        <EditProfileForm
          values={formik.values}
          handleChange={formik.handleChange as HandleFormChange}
        />
      </View>
    </View>
  );
};
