import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gitFollowersQueryCreator } from '../../Actions/GitActions';
import { gitHubFollers } from '../../Graphql/github'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  InputAccessoryView,
  Button,
  ListView } from 'react-native';


type Props = {};

class GitHubFollowers extends Component<Props> {
  render() {

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
      gitHubFollers('sajus');
    }
  }
}
const GitHubFollowerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitHubFollowers);


export default GitHubFollowerConnect;
