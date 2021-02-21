import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const FormInputStyleSheet = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
  },
  label: {
    flexBasis: 100,
    display: 'flex',
    textAlign: 'left',
  },
});
