/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from './components/common';

import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  // we should use hook instead. because is to outdate
  componentWillMount() {
    //this will be hide in env. but this is'nt important
    firebase.initializeApp({
      apiKey: 'AIzaSyDTnIn585PpiG10GsbI7fBWb4Ze2DqY7RU',
      authDomain: 'react-native-auth-app-8cd27.firebaseapp.com',
      projectId: 'react-native-auth-app-8cd27',
      storageBucket: 'react-native-auth-app-8cd27.appspot.com',
      messagingSenderId: '563343592115',
      appId: '1:563343592115:web:33c47861336405ee9a3ec6',
      measurementId: 'G-KR2R739DTC',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'authApp'} />
        <LoginForm></LoginForm>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
