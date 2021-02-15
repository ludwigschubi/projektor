import "react-native-gesture-handler";
import {
  HomePage,
  SearchPage,
  PlusPage,
  NotificationsPage,
  ProfilePage,
  LoginPage,
} from "./pages";
import { TopBar } from "./components";
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { SafeAreaView, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import qs from "query-string";
import { CurrentUser, UserContext } from "./context";

const Stack = createStackNavigator();

export const ReactNativeApp: React.FC = () => {
  let [currentUser, setCurrentUser] = useState<UserContext[]>([]);

  const config = {
    screens: {
      initialRouteName: "Login",
      Login: "login",
      Home: "home",
      Profile: "user",
    },
  };

  const linking = {
    prefixes: ["https://projektor.com", "projektor://"],
    config,
    subscribe(listener: any) {
      // First, you may want to do the default deep link handling
      const onReceiveURL = ({ url }: { url: string }) => {
        const newUser = (qs.parse(url.split("?")[1]) ?? {}) as UserContext;
        if (url.split("?")[0].endsWith("home") && newUser) {
          setCurrentUser([...currentUser, newUser]);
        }
        return listener(url);
      };

      // Listen to incoming links from deep linking
      Linking.addEventListener("url", onReceiveURL);
      return () => {
        // Clean up the event listeners
        Linking.removeEventListener("url", onReceiveURL);
      };
    },
  };

  return (
    <QueryClientProvider client={new QueryClient()}>
      <CurrentUser.Provider value={currentUser}>
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
      </CurrentUser.Provider>
    </QueryClientProvider>
  );
};
