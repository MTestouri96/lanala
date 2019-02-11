import React, {Component} from 'react';
import {View, ScrollView, Modal, Text, TouchableHighlight} from 'react-native';
import ToolBars from '../RaccTools/ToolBars';
import FlatListSold from '../RaccTools/FlatListSold';
import StylesCss from '../StylesCSS/StylesCss';
// import { Button } from 'react-native-elements';
import ModalPopUp from '../RaccTools/ModalPopUp';



export default class SoldScreen extends Component {

    render()   {
      
      return (
      <View style={StylesCss.bcgrndc}>
          <ModalPopUp/>
          <ToolBars/>
          <ScrollView>
            <View style={StylesCss.container}>
                <Text style={marginLeft='50'}>Votre Solde</Text>
                <View flexDirection= 'row' justifyContent= 'center'>
                    <Text style={StylesCss.Style$}>$</Text>
                    <Text style={StylesCss.StyleSold}>15.000</Text>
                </View>
                <Text style={StylesCss.txtqui}>Quittance</Text>
            </View>
            <FlatListSold/>
          </ScrollView>
      </View>
      );
    }
    }