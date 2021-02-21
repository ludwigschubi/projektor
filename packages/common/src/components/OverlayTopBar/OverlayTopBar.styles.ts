import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export const OverlayTopBarStyleSheet = StyleSheet.create({
  container: {
    height: 56,
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dddddd',
    display: 'flex',
    justifyContent: 'center',
  },
  headerOptions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cancel: { textAlign: 'left', flexBasis: 50 },
  header: { flex: 1 },
  done: {
    textAlign: 'right',
    flexBasis: 50,
    color: colors.lightBlue,
  },
});
