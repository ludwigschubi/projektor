import React, { useEffect } from 'react';
import { SafeAreaView, StyleProp, View, ViewStyle } from 'react-native';

import { BottomBar } from '../../components/BottomBar';
import { LoadingAnimation } from '../../components/LoadingAnimation';
import { useCurrentUser } from '../../context';

import { PageStyleSheet as styles } from './Page.styles';

export interface PageProps {
  children?: React.ReactNode | React.ReactNode[];
  route?: Record<string, string | object | undefined> | undefined;
  navigation?: any;
  noBottomBar?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Page: React.FC<PageProps> = ({
  children,
  navigation,
  route,
  noBottomBar,
  style,
  loading,
}) => {
  const currentUser = useCurrentUser();
  useEffect(() => {
    if (!currentUser && route?.name !== 'Login') {
      navigation.navigate('Login');
    }
  }, [currentUser]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LoadingAnimation active={loading}></LoadingAnimation>
        <View style={{ ...styles.main, ...(style as object) }}>{children}</View>
        {!noBottomBar && (
          <BottomBar
            navigate={navigation.navigate}
            activeIcon={route?.name as string}
          />
        )}
      </SafeAreaView>
    </>
  );
};
