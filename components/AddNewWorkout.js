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

    saveWorkout(){

    }

    addExercise(){
        return(<View>
            <input type="text" name="exerciseName" placeholder="exercise"></input>
            <input type="number" name="sets" placeholder="Sets"></input>
            <input type="number" name="reps" placeholder="Reps"></input>
            <button onPress={saveExercise}>Save Exercise</button>
        </View>);
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
                    <button onPress={addExercise}>Add Exercise</button>

                    <button onPress={saveWorkout}>Save Workout</button>
                </form>
            </View>
        );
    }

}