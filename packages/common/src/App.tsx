import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SafeAreaView, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import qs from 'query-string';

import { TopBar } from './components';
import {
  HomePage,
  SearchPage,
  PlusPage,
  NotificationsPage,
  ProfilePage,
  LoginPage,
  EditProfilePage,
} from './pages';
import { LoggedInUser } from './context';
import {
  getActiveSessionsFromStorage,
  saveActiveSessionsToStorage,
} from './resolvers';
import { AppReducerContext, useAppReducer } from './reducers';
import { USER_LOGIN, USER_SET_SESSIONS } from './reducers/app/appActions';
import { LoadingAnimation } from './components/LoadingAnimation';
import { ProfileTopBar } from './components/ProfileTopBar/ProfileTopBar';
import { colors } from './constants';
import { OverlayTopBar } from './components/OverlayTopBar';

const Stack = createStackNavigator();

export const ReactNativeApp: React.FC = () => {
  const [state, dispatch] = useAppReducer();
  const [loadUser, setLoadUser] = useState<boolean>(false);

  const config = {
    screens: {
      initialRouteName: 'Home',
      Login: 'login',
      Search: 'search',
      Home: '',
      Profile: 'user',
      EditProfile: 'user/edit',
    },
  };

  const linking = {
    prefixes: ['https://projektor.com', 'projektor://'],
    config,
    subscribe(listener: any) {
      // First, you may want to do the default deep link handling
      const onReceiveURL = async (e: { url: string }) => {
        const newUser = (qs.parse(
          e.url.split('?')[1],
        ) as unknown) as LoggedInUser;
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
          <Stack.Navigator
            headerMode="screen"
            screenOptions={{
              headerShown: true,
              animationEnabled: false,
              headerStyle: { height: 56 },
              header: ({ scene }) => (
                <>
                  <SafeAreaView
                    style={{ flex: 0, backgroundColor: colors.white }}
                  />
                  <SafeAreaView style={{ backgroundColor: colors.white }}>
                    <TopBar shown={!!scene.descriptor.options.headerShown} />
                  </SafeAreaView>
                </>
              ),
            }}>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Search" component={SearchPage} />
            <Stack.Screen name="Plus" component={PlusPage} />
            <Stack.Screen name="Notifications" component={NotificationsPage} />
            <Stack.Screen
              name="Profile"
              component={ProfilePage}
              options={{
                header: ({ scene }) => (
                  <>
                    <SafeAreaView
                      style={{ flex: 0, backgroundColor: colors.white }}
                    />
                    <SafeAreaView>
                      <ProfileTopBar
                        shown={!!scene.descriptor.options.headerShown}
                      />
                    </SafeAreaView>
                  </>
                ),
              }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfilePage}
              options={{
                animationEnabled: true,
                header: ({ scene, navigation }) => (
                  <>
                    <SafeAreaView
                      style={{ flex: 0, backgroundColor: colors.white }}
                    />
                    <SafeAreaView style={{ backgroundColor: colors.white }}>
                      <OverlayTopBar
                        onCancel={() => navigation.goBack()}
                        shown={!!scene.descriptor.options.headerShown}
                      />
                    </SafeAreaView>
                  </>
                ),
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.ModalTransition,
              }}
              // options={{
              //   header: () => (
              //     <SafeAreaView>
              //       <TopBar />
              //     </SafeAreaView>
              //   ),
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppReducerContext.Provider>
    </QueryClientProvider>
  );
};
