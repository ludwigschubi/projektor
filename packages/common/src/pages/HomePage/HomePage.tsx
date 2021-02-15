import React from "react";
import { Text } from "react-native";
import { useQuery } from "react-query";
import {
  getActiveSessions,
  logOutOfSession,
} from "../../resolvers/auth/sessions";
import { Page } from "../Page";
import { Button } from "../../components/Button";
import { useCurrentUser } from "../../context";

export interface HomePageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export const HomePage: React.FC<HomePageProps> = ({ ...props }) => {
  // const { data, error, isLoading } = useQuery("sessions", getActiveSessions);
  const currentUser = useCurrentUser();

  console.debug(currentUser)

  return (
    <Page {...props}>
      <>
        <Button
          onPress={() => {
            logOutOfSession(currentUser[0]?.sessionId ?? "").then(() => {
              props.navigation.navigate("Login");
            });
          }}
        >
          {`Log out of ${currentUser[0]?.webId}`}
        </Button>
        <Text>Home</Text>
      </>
    </Page>
  );
};
