import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const ProfilePictureStyleSheet = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
  },
  active: {
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 50,
  },
});
