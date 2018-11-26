import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

export class WorkoutScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                
            </View>
        );
    }

    AppNavigator = createStackNavigator({
        Workout:{
            screen: WorkoutScreen
        }
    })



}
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor: '#EEEEEE'
        }
    }
);

class Workout extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <View>
                
            </View>
        );
    }

}
