import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { Button } from "../../components";
import { LoadingAnimation } from "../../components/LoadingAnimation";
import { Page } from "../Page";
import { LoginPageStyleSheet as styles } from "./LoginPage.styles";
const logoMobile = require("../../../src/assets/images/Logo Mobile.png");

export interface LoginPageProps {
  route?: Record<"Home", object | undefined>;
  navigation?: any;
}

export const LoginPage: React.FC<LoginPageProps> = ({ ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
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
        <Button>Login</Button>
        <Button style={styles.communityButton}>
          Login with community account
        </Button>
        <Button style={styles.sovereignButton}>
          Login with sovereign account
        </Button>
      </View>
    </Page>
  );
};
