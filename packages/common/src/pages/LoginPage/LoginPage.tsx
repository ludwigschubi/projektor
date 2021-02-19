import React, { useEffect, useRef } from 'react';
import { Animated, View, Linking } from 'react-native';

import { Button, Text } from '../../components';
import { LoadingAnimation } from '../../components/LoadingAnimation';
import { TextSize } from '../../components/Text/Text.styles';
import { useCurrentUser } from '../../context';
import { Page } from '../Page';

import { LoginPageStyleSheet as styles } from './LoginPage.styles';

const logoMobile = require('../../../src/assets/images/Logo Mobile.png');

export interface LoginPageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export const LoginPage: React.FC<LoginPageProps> = ({ ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const currentUser = useCurrentUser();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (currentUser?.isLoggedIn) {
      props.navigation.navigate('Home');
    }
  }, [currentUser]);

  return (
    <Page {...props} noBottomBar style={styles.container}>
      <LoadingAnimation active />
      <View style={styles.imageWrapper}>
        <Animated.Image
          source={logoMobile}
          style={{ opacity: fadeAnim, ...styles.image }}
        />
      </View>
      <View style={styles.loginOptions}>
        <Button
          onPress={() => {
            Linking.openURL('http://localhost:3000/login');
          }}>
          Login or Register
        </Button>
        {/* <Button
          style={styles.communityButton}
          textStyle={styles.communityButtonText}
          onPress={() => {
            Linking.openURL(
              `http://localhost:3000/login?idp=${encodeURIComponent(
                'https://solidcommunity.net',
              )}`,
            );
          }}>
          Login with community account
        </Button>
        <Text size={TextSize.Medium} style={styles.or}>
          or
        </Text>
        <Button
          style={styles.registerButton}
          onPress={() => {
            Linking.openURL(
              `https://auth.inrupt.com/signup?redirect_uri=${encodeURIComponent(
                'projektor://login',
              )}`,
            );
          }}>
          Register account
        </Button> */}
      </View>
    </Page>
  );
};
