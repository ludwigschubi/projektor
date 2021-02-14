import React from "react";
import { SafeAreaView, View } from "react-native";
import { BottomBar } from "../../components/BottomBar";
import { TopBar } from "../../components/TopBar";
import { PageStyleSheet as styles } from "./Page.styles";

export interface PageProps {
  children?: React.ReactNode | React.ReactNode[];
  route?: Record<string, string | object | undefined> | undefined;
  navigation?: any;
}

export const Page: React.FC<PageProps> = ({ children, navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>{children}</View>
      <BottomBar navigate={navigation.navigate} activeIcon={route?.name as string} />
    </SafeAreaView>
  );
};
