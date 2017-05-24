/**
 * Mongo Explorer React
 * https://github.com/alishdev/Mongo-Explorer-React
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

var HomePage = require('./screens/home');
var NewConnectionScreen = require('./screens/new-connection')

const mainApp = StackNavigator({
  Home: {screen: HomePage},
  NewConnection: {screen: NewConnectionScreen}
});

AppRegistry.registerComponent('MongoExplorerReact', () => mainApp);
