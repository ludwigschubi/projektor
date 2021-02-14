import React from "react";
import { Text } from "react-native";
import { Page } from "../Page";
import { SearchPageStyleSheet as styles } from "./SearchPage.styles";

export interface SearchPageProps {
  route?: Record<"Home", object | undefined>;
  navigation?: any;
}

export const SearchPage: React.FC<SearchPageProps> = ({ ...props }) => {
  return (
    <Page {...props}>
      <>
        <Text>Search</Text>
      </>
    </Page>
  );
};
