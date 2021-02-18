import React from 'react';
import { Text, Linking } from 'react-native';

import {
  logOutOfSession,
  removeSessionFromStorage,
} from '../../resolvers/auth/sessions';
import { Page } from '../Page';
import { Button } from '../../components/Button';
import { useCurrentUser } from '../../context';
import { useGetCurrentProfileQuery } from '../../resolvers/user/profile';
import { useAppContext } from '../../reducers';
import { USER_LOGOUT } from '../../reducers/app/appActions';

export interface HomePageProps {
  route?:
    | { name: string; key: string; params: { sessionId: string } }
    | undefined;
  navigation?: any;
}

export const HomePage: React.FC<HomePageProps> = ({ ...props }) => {
  const currentUser = useCurrentUser();
  const { dispatch } = useAppContext();
  const { error: profileQueryError, isLoading } = useGetCurrentProfileQuery();

  if (
    (profileQueryError as Error)?.message.includes('AUTH_ERROR') &&
    currentUser
  ) {
    logOutOfSession(currentUser.sessionId).then(() => {
      removeSessionFromStorage(currentUser.sessionId);
      dispatch({
        type: USER_LOGOUT,
        payload: currentUser.sessionId,
      });
    });
  }

  return (
    <Page {...props} loading={isLoading}>
      <>
        {currentUser && (
          <Button
            onPress={() => {
              logOutOfSession(currentUser.sessionId ?? '').then(() => {
                removeSessionFromStorage(currentUser.sessionId);
                dispatch({
                  type: USER_LOGOUT,
                  payload: currentUser.sessionId,
                });
              });
              // .then(() => {
              //   props.navigation.navigate('Login');
              // });
            }}>
            {`Log out of ${currentUser?.webId}`}
          </Button>
        )}
        <Text>Home</Text>
        <Button
          onPress={() => {
            Linking.openURL('http://localhost:3000/login');
          }}>
          Login to another account
        </Button>
      </>
    </Page>
  );
};
