import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import AppNavigator from './AppNavigator';

const Appcontainer = createAppContainer(AppNavigator.LoginHome);

export default class App extends React.Component {
  render() {
    return (
      <Appcontainer />
    )
  }
}