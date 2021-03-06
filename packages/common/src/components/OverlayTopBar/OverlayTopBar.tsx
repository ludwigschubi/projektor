import React from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  StyleSheetProperties,
  StatusBar,
} from 'react-native';

import { colors } from '../../constants';
import { useAppContext } from '../../reducers';
import { Text, TextVariant } from '../Text';

import { OverlayTopBarStyleSheet as styles } from './OverlayTopBar.styles';

interface OverlayTopBarProps {
  style?: StyleProp<ViewStyle>;
  onCancel?: () => void;
  shown: boolean;
}

export const OverlayTopBar: React.FC<OverlayTopBarProps> = ({
  style,
  shown,
  onCancel,
}) => {
  const { state, dispatch } = useAppContext();
  return (
    <View
      style={{
        ...styles.container,
        ...(style as StyleSheetProperties),
        ...(shown ? {} : { display: 'none' }),
      }}>
      <StatusBar backgroundColor={colors.white} />
      <View style={styles.headerOptions}>
        <Text
          variant={TextVariant.Regular}
          style={styles.cancel}
          onPress={onCancel}>
          Cancel
        </Text>
        <Text style={styles.header}>Edit Profile</Text>
        <Text
          style={styles.done}
          textStyle={styles.doneText}
          onPress={() => {
            if (typeof state.submitModalForm === 'function') {
              state.submitModalForm();
            }
          }}>
          Done
        </Text>
      </View>
    </View>
  );
};
