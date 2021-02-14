import 'react-native-gesture-handler';
import {
  HomePage,
  TopBar,
  SearchPage,
  PlusPage,
  NotificationsPage,
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
            header: () => (
              <SafeAreaView>
                <TopBar />
              </SafeAreaView>
            ),
          }}></Stack.Screen>
        <Stack.Screen
          name="Search"
          component={SearchPage}
          options={{
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
