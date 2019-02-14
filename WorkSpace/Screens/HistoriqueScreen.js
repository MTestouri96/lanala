import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import FlatListHome from '../RaccTools/FlatListHome';
import StylesCss from '../StylesCSS/StylesCss';
import FlatlistHistorique from '../RaccTools/FlatlistHistorique';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    }
    static navigationOptions = {
        title:'                   Historique',
     
   headerStyle: {

        backgroundColor: '#FFFFFF',
      },
   headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }; 

render()   {
  
  return (
  <View style={StylesCss.bcgrndC}>
    <FlatlistHistorique/>
  </View>
  );
}
}