import React, {Component} from 'react';
import {View, TouchableOpacity,ScrollView, ToastAndroid, Text, Image, TextInput} from 'react-native';
import StyleCss from './StylesCSS/StylesCss';
import { Button } from 'react-native-elements';

const _renderSeparator = () => (<View style={StylesCss.Separator}/>)

export default class ContentPopUp extends Component {
    
    constructor(props) {super(props);
                        this.state = {text: ''};}

    render () {
        return(
            <ScrollView>
                <View   style={StyleCss.bcPopUp}>
                    <Text ItemSeparatorComponent={_renderSeparator}>Price Range</Text>
                    <View flexDirection= 'row' justifyContent= 'space-around' alignItem= 'baseline'>
                        <TouchableOpacity   onPress={() => (this.props.navigation.navigate('HomeScreen'))}>
                            <Image name='Add'
                                style={{width:35, height:30}}
                                source={require('../Ressource/add.png')}/>
                        </TouchableOpacity>    
                            <Text>$</Text>
                            <TextInput onChangeText={(text)=> this.setState({text})}
                                       value={this.state.text}/>
                        <TouchableOpacity   onPress={() => {ToastAndroid.show("Remove",ToastAndroid.SHORT)}}>
                            <Image name='Remove'
                                style={{width:35, height:30}}
                                source={require('../Ressource/remove.png')}/>
                        </TouchableOpacity>
                    </View>  
                </View>
                <Button title= 'Payer'
                        raised
                        onPress={()=> {/*Do Something*/}}/>
            </ScrollView>
        );
    }
}