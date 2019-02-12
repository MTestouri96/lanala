import React, {Component} from 'react';
import {Modal, View, Alert, ScrollView, TouchableHighlight,Button} from 'react-native';
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
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {Alert.alert('Modal has been closed.');
            }}>
            <View>
              <ScrollView marginTop= '68%' style={StylesCss.bcPopUp}>
              <Button onPress={() => {
                         this.setModalVisible(!this.state.modalVisible); }}
                         title="Epargne"
                         color="#B39DDB" 
                         />
              
                <ContentPopUp/>
                
              </ScrollView>
            </View>
          </Modal>
          <Button title= 'Eppppppppargne'
                  position= 'fixed'
                color="#B39DDB"
                  raised
                  onPress={()=> {this.setModalVisible(true);}}/>
        </View>
      );
    }
  }