import { StyleSheet } from 'react-native';

export const ProfileTopBarStyleSheet = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dddddd',
  },
  username: {
    width: '100%',
    textAlign: 'left',
    fontSize: 24,
    lineHeight: 24,
  },
});
