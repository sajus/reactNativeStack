import gql from "graphql-tag";
import { Query } from "react-apollo";
import React from 'react';

const GET_GIT_FOLLOERS = gql`
  query followers($user: String!) {
    nodes
    totalCount
  }
`;

const GitHubFollers = function(gitUserName) {
  return( <Query query={GET_GIT_FOLLOERS} variables={{ gitUserName }}>
    console.log(this)
    {function(loading, error, data) {
        if (loading) console.log('loading');
        if (error) console.log('error');
        if (data) console.log(data)
        return (
          <span>Test</span>
        )
    }}
  </Query>)
}

export { GitHubFollers }
