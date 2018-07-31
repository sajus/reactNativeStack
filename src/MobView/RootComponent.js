import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , ActivityIndicator, DatePickerIOS } from 'react-native';
import { GitHubFollowerConnect } from './follower/GitHubFollower'

type Props = {};

export default class RootComponent extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <ActivityIndicator size="large" color="#0000ff" />
          <GitHubFollowerConnect />
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
