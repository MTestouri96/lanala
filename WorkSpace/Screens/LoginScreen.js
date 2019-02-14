import React, {Component} from 'react';
import {TextInput, Text, Image, View, TouchableOpacity} from 'react-native';
//import {Button} from 'react-native-elements';
import StylesCss from '../StylesCSS/StylesCss'

const _renderSeparator = () => (<View style={StylesCss.Separator}/>)

class LoginScreen extends Component {

    constructor(props) {
    super(props);
    this.state = {text: ''};
    };

  render() {   
    return (
      <View backgroundColor="#FCFCFC">
        <Image source={require('../Ressource/home.png')}/> 
           <View style={StylesCss.containerlog}>
        <TextInput 
                  placeholder= "Username"
                  onChangeText={(text) => this.setState({text})}/>
        <TextInput placeholder= "Password"
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({text})}/>
      
        <Text>Request new password.</Text>
        </View>
        <View style={StylesCss.containerbtn}>
        <TouchableOpacity style={StylesCss.BoutonContainer} onPress={() => (this.props.navigation.navigate('HomeScreen'))}>

          <Text style={StylesCss.ButtonText}>LOGIN</Text>
          </TouchableOpacity>
    </View>
        </View>
    );
  };
}
export default LoginScreen;





