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
    backgroundColor: colors.white,
    borderColor: colors.anthracite,
    borderWidth: 1,
  },
  communityButtonText: {
    color: colors.black,
  },
  sovereignButton: {
    marginTop: 16,
    backgroundColor: colors.orange,
  },
  or: {
    padding: 16,
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: colors.green,
  },
});
