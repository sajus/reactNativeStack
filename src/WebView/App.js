import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import GitHubFollowerConnect from './GitHubFollower'

class App extends Component {
  render() {
    return (
       <GitHubFollowerConnect/>
    );
  }
}

export default App;
