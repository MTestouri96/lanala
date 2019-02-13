import React, {Component} from 'react';
import {TextInput, Text, Image, View, Button, KeyboardAvoidingView} from 'react-native';
//import {Button} from 'react-native-elements';
import StylesCss from '../StylesCSS/StylesCss'

class LoginScreen extends Component {

    constructor(props) {
    super(props);
    this.state = {text: ''};
    };

  render() {   
    return (
      <View style={StylesCss.container}>
      <KeyboardAvoidingView behavior ='padding' enabled='true' /*backgroundColor="#FCFCFC" style={StylesCss.container}*/  >
        <Image source={require('../Ressource/home.png')}/> 
      
        <TextInput placeholder= "Username"
                  onChangeText={(text) => this.setState({text})}/>
        <TextInput placeholder= "Password"
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({text})}/>
      
        <Text>Request new password.</Text>
        
          <Button
style={StylesCss.containerbtn}
              //disabled={!this.state.text}
              color="#1abc9c"
              onPress={() => (this.props.navigation.navigate('HomeScreen'))}
              title="LOGIN"/>
    
        </KeyboardAvoidingView>
        </View>
    );
  };
}
export default LoginScreen;





