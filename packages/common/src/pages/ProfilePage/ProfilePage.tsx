import React from "react";
import { Text } from "react-native";
import { Page } from "../Page";
import { ProfilePageStyleSheet as styles } from "./ProfilePage.styles";

export interface ProfilePageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ ...props }) => {
  return (
    <Page {...props}>
      <>
        <Text>Profile</Text>
      </>
    </Page>
  );
};
