import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { AppLoading } from 'expo';
import Router from './app/config/router';

export default class App extends Component {
  render() {
    return (
        <Router />
    );
  }
}
