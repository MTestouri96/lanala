import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import FlatListHome from '../RaccTools/FlatListHome';
import StylesCss from '../StylesCSS/StylesCss';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
   }

render()   {
  return (
  <View style={StylesCss.bcgrndC}>
    <View  style={StylesCss.container1} flexDirection= 'row' justifyContent= 'flex-start'>    
      <Avatar size= 'medium'
              rounded
              source={require('../Ressource/avatar.png')}
              onPress={()=> (this.props.navigation.navigate('SoldScreen'))}/>
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