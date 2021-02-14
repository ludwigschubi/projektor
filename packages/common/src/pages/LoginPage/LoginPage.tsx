import React from "react";
import { Button } from "../../components";
import { Page } from "../Page";
import { LoginPageStyleSheet as styles } from "./LoginPage.styles";

export interface LoginPageProps {
  route?: Record<"Home", object | undefined>;
  navigation?: any;
}

export const LoginPage: React.FC<LoginPageProps> = ({ ...props }) => {
  return (
    <Page {...props} noBottomBar>
      <>
        <Button>Login</Button>
      </>
    </Page>
  );
};
