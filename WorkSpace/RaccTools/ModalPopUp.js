import React, {Component} from 'react';
import {Modal, View, Alert, Text, TouchableHighlight,Button} from 'react-native';
import StylesCss from '../StylesCSS/StylesCss';
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
              <Button onPress={() => {
                         this.setModalVisible(!this.state.modalVisible); }}
                         title="Epargne"
                         color="#B39DDB" />
              
                <ContentPopUp/>
                
              </View>
            </View>
          </Modal>
          <Button title= 'Epargne'
                color="#B39DDB"
                  raised
                  onPress={()=> {this.setModalVisible(true);}}/>
        </View>
      );
    }
  }