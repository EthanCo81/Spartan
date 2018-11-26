import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export class SpartanBar extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
        <View>
            SPARTAN
        </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor: '#CF1102'
        }
    }
);