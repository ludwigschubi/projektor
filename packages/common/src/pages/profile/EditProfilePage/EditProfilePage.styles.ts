import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

export const EditProfilePageStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 8,
  },
  profileContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
  },
  headContainer: {
    width: '100%',
    height: 96,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profilePictureContainer: { height: 96, width: 96 },
  profilePicture: { height: 96, width: 96 },
  infoContainer: {
    marginTop: 16,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
  },
  name: {
    textAlign: 'left',
  },
  bio: {
    marginTop: 4,
    textAlign: 'left',
  },
  link: {
    marginTop: 4,
    textAlign: 'left',
    color: colors.darkBlue,
  },
  profileButtonContainer: {
    height: 40,
    marginTop: 16,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  editProfileButton: {
    flex: 1,
    flexGrow: 1,
  },
});
