import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ListConnect from './components/Inputs.js'

type Props = {};

export default class RootComponent extends Component<Props> {
  render() {
    return (
        //<View style={styles.container}>
          <ListConnect />
        //</View>
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
