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

class SpartanBar extends React.Component{

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

    styles = StyleSheet.create(
        {
            container:{
                backgroundColor: '#CF1102'
            }
        }
    );


}