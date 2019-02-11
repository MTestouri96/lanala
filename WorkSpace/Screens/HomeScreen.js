import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import FlatListHome from './RaccTools/FlatListHome';
import StylesCss from './RaccTools/StylesCSS/StylesCss';

const Dinfo= [
  { Title: "Type et Nom d'assurance",
    Date: "01 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "02 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "03 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "04 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "05 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "06 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "07 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "08 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "09 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "10 Fev 2019",},
  { Title: "Type et Nom d'assurance",
    Date: "11 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "12 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "13 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "14 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "15 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "16 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "17 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "18 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "19 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "20 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "21 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "22 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "23 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "24 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "25 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "26 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "27 Fev 2019"},
  { Title: "Type et Nom d'assurance",
    Date: "28 Fev 2019"},
  { Title: " ",
    Date: " "},
  { Title: " ",
    Date: " "},
]

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    }
    /* static navigationOptions = {
      title: 'HomeScreen',
   headerStyle: {
        backgroundColor: '#03A9F4',
      },
   headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
   
    }; */

render()   {
  
  return (
  <View style={StylesCss.bcgrndC}>
    <View  style={StylesCss.container1} flexDirection= 'row' justifyContent= 'flex-start'>    
      <Avatar size= 'medium'
              rounded
              source={require('C:/Users/Testouri Mohamed/testapp/Assurance/WorkSpace/Ressource/avatar.png')}/>
      <View flexDirection='column'>
        <Text style={StylesCss.Sname}>Rahul Sharrna</Text>
        <Text>Online</Text>
      </View> 
    </View>
    <FlatListHome/>
  </View>
  );
}
}