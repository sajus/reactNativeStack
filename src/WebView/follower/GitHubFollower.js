import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gitFollowersQueryCreator } from '../../Actions/GitActions'
import './GitHubFollower.css';
import {
  gitHubFollers
} from '../../Graphql/github'

import {Panel,
Button, Hero, Container,Heading} from 'react-bulma-components/full';

class GitHubFollower extends Component {
  render() {
    const { onSearchQuery, followers, following} = this.props;
    return (
      <div className="container">
        <Panel>
          <Panel.Header>
          Followers & Following
          </Panel.Header>
          <Panel.Block>
            <input size="small" type="text" id="searchQuery" />
          </Panel.Block>
          <Panel.Block>
            <Button color="primary" size="medium" onClick={onSearchQuery}>Search</Button>
          </Panel.Block>
          <Panel.Block>
            {following.map(function(fName, index){
              return <Button className="spacer" color="info" size="medium" onClick={onSearchQuery}>{fName}</Button>
            })}
          </Panel.Block>
          <Panel.Block>
            {followers.map(function(fName, index){
              return <Button className="spacer" color="primary" size="medium" onClick={onSearchQuery}>{fName}</Button>
            })}
          </Panel.Block>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    followers: state.gitHub.followers,
    following: state.gitHub.following
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchQuery: function() {
      gitHubFollers(document.getElementById("searchQuery").value)
    }
  }
}
const GitHubFollowerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitHubFollower);

export default GitHubFollowerConnect;
