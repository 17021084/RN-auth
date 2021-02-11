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

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'authApp'} />
        <Text style={{color: 'red'}}> helloo</Text>
        <Text style={{color: 'red'}}> helloo</Text>
        <Text style={{color: 'red'}}> helloo</Text>
        <Text style={{color: 'red'}}> helloo</Text>
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
