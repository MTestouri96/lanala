import React, {Component} from 'react';
import {TextInput, Text, Image, ScrollView, View, Button} from 'react-native';
//import {Button} from 'react-native-elements';
import StylesCss from './RaccTools/StylesCSS/StylesCss'

class LoginScreen extends Component {

    constructor(props) {
    super(props);
    this.state = {text: ''};
    }
   /* static navigationOptions = {
      title: 'LoginScreen',
   headerStyle: {
        backgroundColor: '#03A9F4',
      },
   headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}; */ 

  render() {   
    return (
      <ScrollView backgroundColor="#FCFCFC" style={StylesCss.container} >
        <Image source={require('../Ressource/home.png')}/> 
        <TextInput placeholder= "Username"
                  onChangeText={(text) => this.setState({text})}/>
        <TextInput placeholder= "Password"
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({text})}/>
        <Text>Request new password.</Text>
        <View style={StylesCss.containerbtn}>
          <Button raised
              color="#B39DDB"
              onPress={() => (this.props.navigation.navigate('HomeScreen'))}
              title="LOGIN"/>
        </View>
      </ScrollView>
    );
  };
}
export default LoginScreen;





