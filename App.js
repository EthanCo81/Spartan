

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { WorkoutScreen } from './components/WorkoutScreen';
import { CalculatorScreen } from './components/CalculatorScreen';
import { SpartanBar } from './components/SpartanBar';
import { Footer } from './components/Footer';

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
