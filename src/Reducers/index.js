import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ApolloClient } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { GitHubReducer } from './github';
import { GITHUB_GRAPHQL } from '../../app.json';


/* Apollo Redux */

/* Create HTTPLINK  */
const httpLink = new HttpLink({ uri: GITHUB_GRAPHQL });
const client = new ApolloClient({
  link: httpLink
});

/* Combine all the reducers to App reducer */
const AppReducer =  combineReducers({
  gitHub: GitHubReducer,
  apollo: client.reducer
});

const rootReducer = function(store, action) {
  return AppReducer(store, action);
}

/* Create Dummy inital store  */
let initialStore = {};
let store = createStore(rootReducer, initialStore, compose(
  applyMiddleware(client.middleware())
));

export { AppReducer, store };
