import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import FlatListSold from '../RaccTools/FlatListSold';
import StylesCss from '../StylesCSS/StylesCss';
// import { Button } from 'react-native-elements';
import ModalPopUp from '../RaccTools/ModalPopUp';



export default class SoldScreen extends Component {

 static navigationOptions = {
    headerRight:  <TouchableOpacity   onPress={() => {ToastAndroid.show("Go To History",ToastAndroid.SHORT)}}>
                    <Image name='History'
                          style={{width:30, height:30}}
                          source={require('../Ressource/history.png')}/>
                   </TouchableOpacity>, 
   title: ' ',
    headerStyle: {backgroundColor: '#03A9F4',},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold',}, 
}; 

constructor() {
  super();
  this.state = {count: 0};
}

_incrementCount() {
  this.setState = ({
    count: count + 50
  });
}
    render()   {
      
      return (
      <View style={StylesCss.bcgrndc}>
          
          
            <View style={StylesCss.container}>
                <Text style={marginLeft='50'}>Votre Solde</Text>
                <View flexDirection= 'row' justifyContent= 'center'>
                    <Text style={StylesCss.Style$}>$</Text>
                    <Text style={StylesCss.StyleSold}>{this.state.count}</Text>
                </View>
                <Text style={StylesCss.txtqui}>Quittance</Text>
                <ModalPopUp/>
                <FlatListSold/>
            </View>
           
         
          
      </View>
      );
    }
    }