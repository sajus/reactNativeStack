import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , ActivityIndicator, DatePickerIOS } from 'react-native';

type Props = {};

export default class RootComponent extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
