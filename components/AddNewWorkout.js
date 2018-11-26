import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

export class AddNewWorkout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <form>
                    <label>
                        <input type="text" name="name" placeholder="Workout Name"></input>
                    </label>
                    <select>
                        <option value="back">Back and Bi's</option>
                        <option value="chest">Chest and Tri's</option>
                        <option value="legs">Legs</option>
                    </select>
                    <button onClick={addExercise}>Add Exercise</button>
                </form>
            </View>
        );
    }

}