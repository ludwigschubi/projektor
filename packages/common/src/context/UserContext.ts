import React from "react";

export type UserContext =
  | {
      sessionId: string;
      isLoggedIn: string;
      webId: string;
    }
  | undefined;

export const CurrentUser = React.createContext<UserContext[]>([]);

export const useCurrentUser = () => React.useContext(CurrentUser);
