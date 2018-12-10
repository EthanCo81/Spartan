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
        this.state = {calculator: null,
            weight: null,
            reps: null}
        this.calculateBenchMax= this.calculateBenchMax.bind(this);
        this.calculateDeadliftMax= this.calculateDeadliftMax.bind(this);
        this.calculateSquatMax = this.calculateSquatMax.bind(this);
        this.runCalculator = this.runCalculator.bind(this);
    }

    calculateBenchMax(){
        if(this.state.weight === null || this.state.reps === null) return null;
        if(this.state.reps===1) return this.state.weight;
        let max = this.state.weight + (5+this.state.reps/2)*(this.state.reps/2)+(this.state.reps%2)*6;
        return max;
    }

    calculateSquatMax(){
        if(this.state.weight === null || this.state.reps === null) return null;
        if(this.state.reps<1) return null;
        if(this.state.reps===1) return this.state.weight;
        let max = this.state.weight + (4+this.state.reps/2)*(this.state.reps/2)+(this.state.reps%2)*3;
        return max;
        
    }

    calculateDeadliftMax(){
        if(this.state.weight === null || this.state.reps === null) return null;
        if(this.state.reps<1) return null;
        if(this.state.reps===1) return this.state.weight;
        let max = this.state.weight + (7+this.state.reps/2)*(this.state.reps/2)+(this.state.reps%2)*4;
        return max;
    }

    runCalculator(){
        let max = null;
        if(this.state.calculator==="bench"){
            max=this.calculateBenchMax();
        }else if (this.state.calculator==="deadlift"){
            max = this.calculateDeadliftMax();
        }else if(this.state.claculator==="squat"){
            max= this.calculateSquatMax();
        }else {
            return "Select a lift";
        }
        return (
            <View>
                Your {this.state.calculator} max is {max}
            </View>
        );
    }

    render(){

        let maxWeight = null;

        return(<View>
            <h3 class="calcText">Calculate Max For: </h3>
            <select>
                <option value="bench" onPress={()=>{this.setState({calculator="bench"})}}>Bench</option>
                <option value="deadlift" onPress={()=>{this.setState({calculator="deadlift"})}}>Deadlift</option>
                <option value="squat" onPress={()=>{this.setState({calculator="squat"})}}>Squat</option>
            </select>
            <label>
                <input name="weight" placeholder="weight" type="number" onChange={this.setState({})}></input>
            </label>
            <label>
                <input name="reps" placeholder="weight" type="text"></input>
            </label>
            <button onPress={runCalculator()}></button>
            {maxWeight}
        </View>);
    }
}

const styles = StyleSheet.create({
    container:{

    }
});