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

class Footer extends Component{

    constructor(props){
        super(props);
    }

    goToWorkouts(){

    }

    goToSearch(){

    }

    goToCalculator(){

    }

    goToProfile(){

    }

    render(){

        return(
            <View>
                <div>W</div>
                <div>S</div>
                <div>C</div>
                <div>P</div>
            </View>
        );
    }

    styles = StyleSheet.create({
        container:{
            backgroundColor: '#CF1102'
        }
    });
}

