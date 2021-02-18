import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SafeAreaView, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import qs from 'query-string';

import { TopBar } from './components';
import {
  HomePage,
  SearchPage,
  PlusPage,
  NotificationsPage,
  ProfilePage,
  LoginPage,
} from './pages';
import { LoggedInUser } from './context';
import {
  getActiveSessionsFromStorage,
  saveActiveSessionsToStorage,
} from './resolvers';
import { AppReducerContext, useAppReducer } from './reducers';
import { USER_LOGIN, USER_SET_SESSIONS } from './reducers/app/appActions';
import { LoadingAnimation } from './components/LoadingAnimation';

const Stack = createStackNavigator();

export const ReactNativeApp: React.FC = () => {
  const [state, dispatch] = useAppReducer();
  const [loadUser, setLoadUser] = useState<boolean>(false);

  const config = {
    screens: {
      initialRouteName: 'Home',
      Login: 'login',
      Home: 'home',
      Profile: 'user',
    },
  };

  const linking = {
    prefixes: ['https://projektor.com', 'projektor://'],
    config,
    subscribe(listener: any) {
      // First, you may want to do the default deep link handling
      const onReceiveURL = async (e: { url: string }) => {
        const newUser = (qs.parse(e.url.split('?')[1]) ?? {}) as LoggedInUser;
        if (e.url.split('?')[0].endsWith('home') && newUser) {
          dispatch({ type: USER_LOGIN, payload: newUser });
          await saveActiveSessionsToStorage([...state.currentUser, newUser]);
        }
        return listener(e.url);
      };

      // Listen to incoming links from deep linking
      Linking.addEventListener('url', onReceiveURL);
      return () => {
        // Clean up the event listeners
        Linking.removeEventListener('url', onReceiveURL);
      };
    },
  };

  useEffect(() => {
    setLoadUser(true);
    getActiveSessionsFromStorage().then((sessions) => {
      if (sessions && sessions.length > 0) {
        dispatch({ type: USER_SET_SESSIONS, payload: sessions });
      } else {
        dispatch({ type: USER_SET_SESSIONS, payload: [] });
      }
      setLoadUser(false);
    });
  }, []);

  if (loadUser) {
    return <LoadingAnimation />;
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppReducerContext.Provider value={{ state, dispatch }}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{
                animationEnabled: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{
                animationEnabled: false,
                header: () => (
                  <SafeAreaView>
                    <TopBar />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="Search"
              component={SearchPage}
              options={{
                animationEnabled: false,
                header: () => (
                  <SafeAreaView>
                    <TopBar />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="Plus"
              component={PlusPage}
              options={{
                animationEnabled: false,
                header: () => (
                  <SafeAreaView>
                    <TopBar />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="Notifications"
              component={NotificationsPage}
              options={{
                animationEnabled: false,
                header: () => (
                  <SafeAreaView>
                    <TopBar />
                  </SafeAreaView>
                ),
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfilePage}
              options={{
                animationEnabled: false,
                header: () => (
                  <SafeAreaView>
                    <TopBar />
                  </SafeAreaView>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppReducerContext.Provider>
    </QueryClientProvider>
  );
};
