import React, {Component} from 'react';
import {FlatList, ScrollView, View, Text, Image, TouchableOpacity , ToastAndroid} from 'react-native';
import {Avatar} from 'react-native-elements';
import StylesCss from '../StylesCSS/StylesCss';
import Dinfo from '../DataInfo/Dinfo';

const _renderSeparator = () => (<View style={StylesCss.Separator}/>)

export default class FlatListHome extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    }

render()   {
  
  return (
        <FlatList ItemSeparatorComponent={_renderSeparator} 
                  style={StylesCss.container2}
                  data={Dinfo}
                  renderItem={({item}) => <TouchableOpacity onPress={()=> (this.props.navigation.navigate('SoldScreen'))}>
                                            <View flexDirection= 'row' justifyContent='space-between'>
                                              <Avatar rounded
                                                      size= 'medium'/>
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