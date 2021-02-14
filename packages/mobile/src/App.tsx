import 'react-native-gesture-handler';
import {
  HomePage,
  TopBar,
  SearchPage,
  PlusPage,
  NotificationsPage,
  ProfilePage,
} from '@projektor/common';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React.ReactNode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
  );
};

export default App;
