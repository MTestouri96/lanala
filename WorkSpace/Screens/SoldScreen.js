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

    render()   {
      
      return (
      <View style={StylesCss.bcgrndc}>
          <ModalPopUp/>
          <ScrollView>
            <View style={StylesCss.container}>
                <Text style={marginLeft='50'}>Votre Solde</Text>
                <View flexDirection= 'row' justifyContent= 'center'>
                    <Text style={StylesCss.Style$}>$</Text>
                    <Text style={StylesCss.StyleSold}>15.000</Text>
                </View>
                <Text style={StylesCss.txtqui}>Quittance</Text>
            </View>
            <FlatListSold/>
          </ScrollView>
      </View>
      );
    }
    }