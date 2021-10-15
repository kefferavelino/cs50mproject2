import React, {useState} from 'react';

import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Button, Pressable, View } from 'react-native';
import { loginFirebase } from '../apis/firebaseAPI'

export default function LoginScreen(props){

  const [username, handleUsernameUpdate] = useState('')
  const [password, handlePasswordUpdate] = useState('')

  const _login = () => {
    loginFirebase(username, password)
  }

  return(
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TextInput
          style={styles.textInput}
          placeholder='Username'
          value={username}
          onChangeText={handleUsernameUpdate}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          value={password}
          onChangeText={handlePasswordUpdate}
          secureTextEntry
        />
      <View style={styles.btnContainer}>
        <Button title='Login' onPress={_login} />

      </View>
    </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 20,
    borderBottomWidth: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    margin: 10,
    padding:5,
  }
});
