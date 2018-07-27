import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gitFollowersQueryCreator } from '../Actions/GitActions'
import {
  gitHubFollers
} from '../Graphql/github'

class GitHubFollower extends Component {
  getInit
  render() {
    const { onSearchQuery, followers, following} = this.props;
    return (
      <div>
        <input type="text" id="searchQuery" />
        <button onClick={onSearchQuery} />
        {followers.map(function(fName, index){
            return <div key={index}>{fName}</div>;
        })}
        {following.map(function(fName, index){
            return <div key={index}>{fName}</div>;
        })}
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
