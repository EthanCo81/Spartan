import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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

    styles = StyleSheet.create(
        {
            container:{
                backgroundColor: '#EEEEEE'
            }
        }
    );

}