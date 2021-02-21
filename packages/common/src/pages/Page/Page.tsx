import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleProp,
  View,
  ViewStyle,
  StyleSheetProperties,
} from 'react-native';

import { BottomBar } from '../../components/BottomBar';
import { LoadingAnimation } from '../../components/LoadingAnimation';
import { useCurrentUser } from '../../context';

import { PageStyleSheet as styles } from './Page.styles';

export interface PageProps {
  children?: React.ReactNode | React.ReactNode[];
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
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
      navigation.navigate('/login');
    }
  }, [currentUser]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LoadingAnimation active={loading} />
        <View style={{ ...styles.main, ...(style as StyleSheetProperties) }}>
          {children}
        </View>
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
