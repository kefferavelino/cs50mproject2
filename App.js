import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen, { LogoutButton } from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

import { auth, authChangeHandler } from './apis/firebaseAPI'

const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = authChangeHandler(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackVisible: false,
        }}
        >
        {
          !user
          ?
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props}/>}
          </Stack.Screen>
          :
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerRight: () => (<LogoutButton/>),
            }}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
