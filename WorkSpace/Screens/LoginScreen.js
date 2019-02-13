import React, {Component} from 'react';
import {TextInput, Text, Image, View, Button} from 'react-native';
//import {Button} from 'react-native-elements';
import StylesCss from '../StylesCSS/StylesCss'

class LoginScreen extends Component {

    constructor(props) {
    super(props);
    this.state = {text: ''};
    };

  render() {   
    return (
      <View backgroundColor="#FCFCFC">
        <Image source={require('../Ressource/home.png')}/> 
      
        <TextInput placeholder= "Username"
                  onChangeText={(text) => this.setState({text})}/>
        <TextInput placeholder= "Password"
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({text})}/>
      
        <Text>Request new password.</Text>
        <View style={StylesCss.containerbtn}>
          <Button 
              //disabled={!this.state.text}
              color="#b39ddb"
              onPress={() => (this.props.navigation.navigate('SoldScreen'))}
              title="LOGIN"/>
    </View>
        </View>
    );
  };
}
export default LoginScreen;





