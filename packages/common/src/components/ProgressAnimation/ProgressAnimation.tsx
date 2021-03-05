import React from 'react';
import { Bar } from 'react-native-progress';

import { colors } from '../../constants';

export const ProgressAnimation: React.FC = () => {
  return (
    <Bar
      indeterminate
      indeterminateAnimationDuration={1000}
      borderRadius={0}
      borderWidth={0}
      color={colors.lightBlue}
      width={null}
      height={2}
    />
  );
};
