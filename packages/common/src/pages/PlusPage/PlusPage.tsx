import React from "react";
import { Text } from "react-native";
import { Page } from "../Page";
import { PlusPageStyleSheet as styles } from "./PlusPage.styles";

export interface PlusPageProps {
  route?: Record<"Home", object | undefined>;
  navigation?: any;
}

export const PlusPage: React.FC<PlusPageProps> = ({ ...props }) => {
  return (
    <Page {...props}>
      <>
        <Text>Plus</Text>
      </>
    </Page>
  );
};
