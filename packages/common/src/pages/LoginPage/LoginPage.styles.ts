import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export const LoginPageStyleSheet = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  imageWrapper: {
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
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
