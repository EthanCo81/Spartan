import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { WorkoutScreen } from './components/WorkoutScreen';
import { CalculatorScreen } from './components/CalculatorScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    goToWorkouts(){
        this.props.navigation.navigate('WorkoutScreen');
    }

    goToSearch(){
        this.props.navigation.navigate('SearchScreen');
    }

    goToCalculator(){
        this.props.navigation.navigate('CalculatorScreen');
    }

    goToProfile(){
        this.props.navigation.navigate('ProfileScreen');
    }

    render(){

        return(
            <View style = {styles.container}>
                <View onPress={goToWorkouts}><TouchableHighlight>W</TouchableHighlight></View>
                <View onPress={goToSearch}><TouchableHighlight>S</TouchableHighlight></View>
                <View onPress={goToCalculator}><TouchableHighlight>C</TouchableHighlight></View>
                <View onPress={goToProfile}><TouchableHighlight>P</TouchableHighlight></View>
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
    container:{
        backgroundColor: '#CF1102'
    }
});

