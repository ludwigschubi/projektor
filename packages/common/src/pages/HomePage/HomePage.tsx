import React from "react";
import { Text } from "react-native";
import {
  getActiveSessions,
  logOutOfSession,
} from "../../resolvers/auth/sessions";
import { Page } from "../Page";
import { Button } from "../../components/Button";
import { useCurrentUser } from "../../context";
import { useGetCurrentProfileQuery } from "../../resolvers/user/profile";

export interface HomePageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export const HomePage: React.FC<HomePageProps> = ({ ...props }) => {
  const currentUser = useCurrentUser();
  const { data, error, isLoading } = useGetCurrentProfileQuery({
    webId: currentUser?.webId ?? "",
  });

  return (
    <Page {...props}>
      <>
        <Button
          onPress={() => {
            logOutOfSession(currentUser?.sessionId ?? "").then(() => {
              props.navigation.navigate("Login");
            });
          }}
        >
          {`Log out of ${currentUser?.webId}`}
        </Button>
        <Text>Home</Text>
      </>
    </Page>
  );
};
