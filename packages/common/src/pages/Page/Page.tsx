import React from "react";
import { SafeAreaView } from "react-native";
import { BottomBar } from "../../components/BottomBar";
import { TopBar } from "../../components/TopBar";
import { PageStyleSheet as styles } from "./Page.styles";

export const Page: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      {children}
      <BottomBar />
    </SafeAreaView>
  );
};
