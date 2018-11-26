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


export class CalculatorScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {calculator: null}
    }

    calculateBenchMax(weight, reps){
        if(reps===1) return weight;
        let max = weight + (5+reps/2)*(reps/2)+(reps%2)*6;
        return max;
    }

    calculateSquatMax(weight, reps){
        if(reps<1) return null;
        if(reps===1) return weight;
        let max = weight + (4+reps/2)*(reps/2)+(reps%2)*3;
        return max;
        
    }

    calculateDeadliftMax(weight, reps){
        if(reps<1) return null;
        if(reps===1) return weight;
        let max = weight + (7+reps/2)*(reps/2)+(reps%2)*4;
        return max;
    }

    render(){

        return(<View>
            
        </View>);
    }

}
const styles = StyleSheet.create({
    container:{

    }
});