import gql from "graphql-tag";
import { client , store } from '../Reducers'
import {
  gitFollowersSuccessCreator, gitRepoListSuccessCreator
} from '../Actions/GitActions'
const GET_GIT_FOLLOERS = gql `
  query getFollers($login: String!) {
    user(login: $login) {
      followers(first: 15) {
        edges {
          node {
            id
            name
          }
        }
      }
      following(first: 20) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

const GET_GIT_REPO_LIST = gql `
query getFollers($login: String!) {
    user(login: $login) {
    	repositories(first:20) {
      	edges {
          node {
            id
            nameWithOwner
          }
        }
      }
    }
  }
`;

const gitHubFollers = function(user) {
  return client.query({
    query: GET_GIT_FOLLOERS,
    variables: {
      'login': user
    }
  })
  .then(function(data){
    //return data;
    store.dispatch(gitFollowersSuccessCreator(data))
  })
}

const gitHubRepoList = function(user) {
  //console.log("User: " + user);
  return client.query({
    query: GET_GIT_REPO_LIST,
    variables: {
      'login': "sajus"
    }
  })
  .then(function(data){
    console.log("Data: " + data);
    //return data;
    store.dispatch(gitRepoListSuccessCreator(data))
  })
}

export { gitHubFollers, gitHubRepoList }
