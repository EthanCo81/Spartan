/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { WorkoutScreen } from './components/WorkoutScreen';
import { CalculatorScreen } from './components/CalculatorScreen';
import { SpartanBar } from './components/SpartanBar';
import { Footer } from './components/Footer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component{
  render() {
    return (
      <View>
        <View>{SpartanBar}</View>
        <View><AppContainer></AppContainer></View>
        <View>{Footer}</View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Workout: WorkoutScreen,
    Calculator: CalculatorScreen
  },
  {
    initialRouteName: 'Workout',
  }
);

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
