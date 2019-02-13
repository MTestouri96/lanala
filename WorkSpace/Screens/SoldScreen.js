import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image,Button} from 'react-native';
import FlatListSold from '../RaccTools/FlatListSold';
import StylesCss from '../StylesCSS/StylesCss';
import ModalPopUp from '../RaccTools/ModalPopUp';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import HistoriqueScreen from './HistoriqueScreen';


export default class SoldScreen extends Component {

  
  constructor(props) {
    super(props);
    this.state = {text: ''};
    };

 static navigationOptions = {
    headerRight:  
                    <Image name='History'
                          style={{width:30, height:30}}
                          source={require('../Ressource/history.png')}/>
                   , 
   
                     headerStyle: {backgroundColor: '#FFFFFF',},
                     headerTintColor: '#000000',
                     headerTitleStyle: {fontWeight: 'bold',}, 
}; 


    render()   {
      return (
      <View style={StylesCss.bcgrndc}>
          
          
            <View style={StylesCss.container}>
            <Button onPress={()=> this.props.navigation.navigate('HistoriqueScreen')} title="bravo"></Button>
                <Text style={marginLeft='50'}>Votre Solde</Text>
                <View flexDirection= 'row' justifyContent= 'center'>
                    <Text style={StylesCss.Style$}>$</Text>
                    <Text style={StylesCss.StyleSold}>15</Text>
                </View>
                <Text style={StylesCss.txtqui}>Quittance</Text>
                <ModalPopUp/>
                <FlatListSold/>
            </View>
            <Text style={StylesCss.txtqui}>Quittance</Text>
            <ModalPopUp/>
            <FlatListSold/>
          </View>
        </View>
      );
    }
    }

    
    
    

    
