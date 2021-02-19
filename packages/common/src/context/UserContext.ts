import { ImageSourcePropType } from 'react-native';

import { useAppContext } from '../reducers';

export type LoggedInUser =
  | {
      sessionId: string;
      isLoggedIn: string;
      webId: string;
      picture?: ImageSourcePropType;
    }
  | undefined;

export const useCurrentUser = () => {
  const { state: appState } = useAppContext();
  return appState.currentUser && appState.currentUser[0];
};
