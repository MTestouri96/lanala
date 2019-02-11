import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import StylesCss from './StylesCSS/StylesCss';

export default class ToolBars extends Component{
render()
    {
    return (
    <View flexDirection= 'row' justifyContent='space-between' style={StylesCss.container1} >    
      <TouchableOpacity   onPress={() => (this.props.navigation.goBack('HomeScreen'))}>
        <Image name='LeftBack'
             style={{width:35, height:30}}
             source={require('../Ressource/back.png')}/>
      </TouchableOpacity> 
      <TouchableOpacity   onPress={() => {ToastAndroid.show("Go To History",ToastAndroid.SHORT)}}>
        <Image name='History'
             style={{width:30, height:30}}
             source={require('../Ressource/history.png')}/>
      </TouchableOpacity>
    </View>
    );
    }
}