import React, { Compenent } from 'react';
import { View, Button, Text, TouchableOpacity, Image} from 'react-native';

export default class PopUp extends Compenent {
    
    constructor(props) {
        super(props);
        this.state = {count: 0,
                      modalVisible: false};
    };  
    /*combined() {this.somme();
                this.props.navigation.navigate('ValidScreen');}
    somme = () => {}*/
    add = () => {this.setState({count: this.state.count+50})}
    remove=()=>{this.setState({count:this.state.count-50})}
    
    setModalVisible(visible) {this.setState({modalVisible: visible});}

    render() {
        return (
            <View>
                <Button onPress={() => {this.setModalVisible(!this.state.modalVisible); }}
                        title="Epargne"
                        color="#B39DDB" />
                <View>
                    <Text>Price Range</Text>
                    <View flexDirection= 'row' justifyContent= 'space-around' alignItem= 'baseline'>
                        <TouchableOpacity   onPress={this.add}>
                            <Image name='Add'
                                style={{width:35, height:30}}
                                source={require('../Ressource/add.png')}/>
                        </TouchableOpacity>    
                        <Text>$</Text>
                        <Text>{this.state.count >= 0 ? this.state.count: null}</Text>
                        <TouchableOpacity  onPress={this.remove}>
                            <Image name='Remove'
                                   style={{width:35, height:30}}
                                   source={require('../Ressource/remove.png')}/>
                        </TouchableOpacity>
                    </View>  
                    <Button title= 'Payer'
                            color="#B39DDB"
                            onPress={()=> {/*this.combined*/}}/> 
                </View>
            </View>
        )
    }
}