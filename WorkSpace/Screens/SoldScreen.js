import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FlatListSold from '../RaccTools/FlatListSold';
import StylesCss from '../StylesCSS/StylesCss';
// import { Button } from 'react-native-elements';
import ModalPopUp from '../RaccTools/ModalPopUp';



export default class SoldScreen extends Component {

 /*static navigationOptions = {
  headerRight:  <TouchableOpacity onPress={() => {this.props.navigation.navigate('History')}}>
                  <Image name='History'
                        style={{width:30, height:30, marginRight:16}}
                        source={require('../Ressource/history.png')}/>
                </TouchableOpacity>, 
  // headerLeft: ,
  title: ' ',
  headerStyle: {backgroundColor: '#FCFCFC',},
  headerTintColor: '#000000',
  headerTitleStyle: {fontWeight: 'bold',}, 
}*/

constructor() {super();
              this.state = {count: 0};}
    
    render()   {
      return (
        <View style={StylesCss.bcgrndc}>        
          <View>
            <Text style={marginLeft='50'}>Votre Solde</Text>
            <View flexDirection= 'row' justifyContent= 'center'>
              <Text style={StylesCss.Style$}>$</Text>
              <Text style={StylesCss.StyleSold}>{this.state.count }</Text>     
            </View>
            <Text style={StylesCss.txtqui}>Quittance</Text>
            <ModalPopUp/>
            <FlatListSold/>
          </View>
        </View>
      );
    }
}