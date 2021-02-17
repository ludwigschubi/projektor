import React, { useEffect } from 'react';
import { SafeAreaView, StyleProp, View, ViewStyle } from 'react-native';

import { BottomBar } from '../../components/BottomBar';
import { useCurrentUser } from '../../context';

import { PageStyleSheet as styles } from './Page.styles';

export interface PageProps {
  children?: React.ReactNode | React.ReactNode[];
  route?: Record<string, string | object | undefined> | undefined;
  navigation?: any;
  noBottomBar?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Page: React.FC<PageProps> = ({
  children,
  navigation,
  route,
  noBottomBar,
  style,
}) => {
  const currentUser = useCurrentUser();
  useEffect(() => {
    if (!currentUser && route?.name !== 'Login') {
      navigation.navigate('Login');
    }
  }, [currentUser]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.main, ...(style as object) }}>{children}</View>
      {!noBottomBar && (
        <BottomBar
          navigate={navigation.navigate}
          activeIcon={route?.name as string}
        />
      )}
    </SafeAreaView>
  );
};
