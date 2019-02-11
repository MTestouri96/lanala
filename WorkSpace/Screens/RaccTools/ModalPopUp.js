import React, {Component} from 'react';
import {Modal, View, Alert, Text, TouchableHighlight} from 'react-native';
import {Button} from 'react-native-elements';
import StylesCss from './StylesCSS/StylesCss';
import ContentPopUp from './ContentPopUp';

export default class ModalPopUp extends Component {
    state = {
      modalVisible: false,
    };
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  
    render() {
      return (
        <View style={StylesCss.container1}>
          <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <ContentPopUp/>
                <TouchableHighlight onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <Button title= 'Epargne'
                  raised
                  onPress={()=> {this.setModalVisible(true);}}/>
        </View>
      );
    }
  }