import React from "react";
import { Text } from "react-native";
import { Page } from "../Page";
import { HomePageStyleSheet as styles } from "./HomePage.styles";

export const HomePage: React.FC = ({ children }) => {
  return (
    <Page>
      <>
        <Text>Home</Text>
        {children}
      </>
    </Page>
  );
};
