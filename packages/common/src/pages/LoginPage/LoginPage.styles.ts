import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export const LoginPageStyleSheet = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32,
  },
  image: {
    maxWidth: '100%',
    maxHeight: 68,
  },
  loginOptions: {
    width: '100%',
    position: 'absolute',
    left: 16,
    bottom: 64,
    display: 'flex',
    zIndex: 2,
  },
  communityButton: {
    marginTop: 16,
    backgroundColor: colors.darkBlue,
  },
  sovereignButton: {
    marginTop: 16,
    backgroundColor: colors.orange,
  },
});
