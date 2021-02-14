import React from "react";
import { Text } from "react-native";
import { Page } from "../Page";
import { HomePageStyleSheet as styles } from "./HomePage.styles";

export interface HomePageProps {
  route?: Record<"Home", object | undefined>;
  navigation?: any;
}

export const HomePage: React.FC<HomePageProps> = ({ ...props }) => {
  return (
    <Page {...props}>
      <>
        <Text>Home</Text>
      </>
    </Page>
  );
};
