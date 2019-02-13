import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import FlatListSold from '../RaccTools/FlatListSold';
import StylesCss from '../StylesCSS/StylesCss';
import ModalPopUp from '../RaccTools/ModalPopUp';




export default class SoldScreen extends Component {


  constructor(props) {
    super(props);
    this.state = { text: '', 
    price: 25 };
  };

  static navigationOptions = {
    headerRight: <Image name='History'
      style={{ width: 30, height: 30 }}
      source={require('../Ressource/history.png')} />,

    headerStyle: { backgroundColor: '#FFFFFF', },
    headerTintColor: '#000000',
    headerTitleStyle: { fontWeight: 'bold', },
  };



  public actionA(num) {

    alert("test" + num);
  }

  render() {
    return (
      <View style={StylesCss.bcgrndc}>


        <View style={StylesCss.container}>
          <Button onPress={() => this.props.navigation.navigate('HistoriqueScreen')} title="bravo" />
          <Text style={marginLeft = '50'}>Votre Solde</Text>
          <View flexDirection='row' justifyContent='center'>
            <Text style={StylesCss.Style$}>$</Text>
            <Text style={StylesCss.StyleSold} /*onPress={() => (this.actionA(this.state.price))}*/>{this.state.price}</Text>
          </View>
          <Text style={StylesCss.txtqui}>Quittance</Text>
          <ModalPopUp />
          <FlatListSold />
        </View>
        <Text style={StylesCss.txtqui}>Quittance</Text>
        <ModalPopUp />
        <FlatListSold />
      </View>
    );
  }
}






