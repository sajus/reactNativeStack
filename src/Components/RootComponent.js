import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

type Props = {};

export default class RootComponent extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
    );
  }
}
