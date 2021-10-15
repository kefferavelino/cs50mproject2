import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { logoutFirebase } from '../apis/firebaseAPI'

export function LogoutButton(props){

    const _logout = () => {
      logoutFirebase()
    }
    return (
      <View style={styles.logoutBtnContainer}>
        <Pressable onPress={_logout}>
          <Ionicons name="md-exit-outline" size={30} color="black" />
        </Pressable>
      </View>
  )
}

export default function HomeScreen(props) {
  return (
      <View style={styles.container}>
        <Text>HOME</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtnContainer: {
    flexDirection: 'row',
  }
});
