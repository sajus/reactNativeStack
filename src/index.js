/*
  Web version React
*/
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { store, client } from './Reducers';
import { Provider } from 'react-redux';


import AppConnect from './WebView/App';


render(
  <ApolloProvider client={client}>
    <Provider store={store}>
    <AppConnect/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
