/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { store } from './src/Reducers';
import { RootComponent } from './src/Components'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <RootComponent />
      </ApolloProvider>
    );
  }
}
