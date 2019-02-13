import React, {Component} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import StylesCss from '../StylesCSS/StylesCss';
import Dinfo from '../DataInfo/Dinfo';

const _renderSeparator = () => (<View style={StylesCss.Separator}/>)

export default class FlatListHome extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    }
    static navigationOptions = {
      title: '',
   headerStyle: {
        backgroundColor: '#03A9F4',
      },
   headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}; 

render()   {
  
  return (
        <FlatList ItemSeparatorComponent={_renderSeparator} 
                  style={StylesCss.container2}
                  data={Dinfo}
                  renderItem={({item}) => <TouchableOpacity onPress={()=> (('SoldScreen'))}>
                                            <View flexDirection= 'row' justifyContent='space-between'>
                                             
                                              <View flexDirection='column'>
                                                <Text style={StylesCss.big}>{item.Title}</Text>
                                                <Text>{item.Date}</Text>
                                              </View>
                                              <Image alignSelf= 'center'
                                                     name='RightNext'
                                                     style={{width:16, height:16}}
                                                     source={require('../Ressource/next.png')}/>                                  
                                              </View>
                                          </TouchableOpacity>}/>

    )
  };
}