import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export const ButtonStyleSheet = StyleSheet.create({
  container: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  logo: {
    width: 24,
    height: 24,
  },
  [ButtonVariant.Primary]: { backgroundColor: colors.lightBlue },
  [ButtonVariant.Secondary]: {
    backgroundColor: colors.white,
    borderColor: colors.anthracite,
    borderWidth: 1,
  },
});
export const ButtonTextStyleSheet = StyleSheet.create({
  text: {
    color: colors.white,
  },
  [ButtonVariant.Secondary]: {
    color: colors.black,
  },
});
