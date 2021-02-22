import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

export const EditProfilePageStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  profileContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
  },
  headContainer: {
    padding: 16,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
  },
  changePicture: {
    paddingTop: 10,
    color: colors.lightBlue,
  },
  profilePictureContainer: { height: 96, width: 96 },
  profilePicture: { height: 96, width: 96 },
});

export const EditProfileFormStyleSheet = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: undefined,
    borderBottomColor: undefined,
  },
});
