import { StyleSheet } from 'react-native';

export const BottomBarStyleSheet = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#dddddd',
  },
});
