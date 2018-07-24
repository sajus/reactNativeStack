import { createStore, combineReducers } from 'redux';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import GitHubReducer from './github';
import { GITHUB_GRAPHQL } from '../config.json';


/* Apollo Redux */

/* Create HTTPLINK  */
const httpLink = new HttpLink({ uri: GITHUB_GRAPHQL });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

/* Combine all the reducers to App reducer */
const AppReducer =  combineReducers({
  gitHub: GitHubReducer
});

const rootReducer = function(store, action) {
  return AppReducer(store, action);
}

/* Create Dummy inital store  */
let initialStore = {};
let store = createStore(rootReducer, initialStore);

export { AppReducer, store, client };
