import React, { ChangeEvent } from 'react';
import {
  StyleProp,
  StyleSheetProperties,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

import { Text, TextVariant } from '../Text';

import { FormInputStyleSheet as styles } from './FormInput.styles';

interface FormInputProps {
  value?: string;
  label?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  onChange?: (e: string | ChangeEvent<any>) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  value,
  label,
  style,
  inputStyle,
  onChange,
}) => {
  return (
    <View style={{ ...styles.container, ...(style as StyleSheetProperties) }}>
      {label && (
        <Text variant={TextVariant.Regular} style={styles.label}>
          {label}
        </Text>
      )}
      <TextInput
        style={{ ...styles.input, ...(inputStyle as StyleSheetProperties) }}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
