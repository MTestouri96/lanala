import React, {Component} from 'react';
import {FlatList, ScrollView, View, Text, Image, TouchableOpacity , ToastAndroid} from 'react-native';
import {Badge} from 'react-native-elements';
import StylesCss from './StylesCSS/StylesCss';
import Dinfo from '../Screens/DataInfo/Dinfo';

const _renderSeparator = () => (<View style={StylesCss.Separator}/>)

export default class FlatListHome extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    }

render()   {
  
  return (
        <FlatList ItemSeparatorComponent={_renderSeparator} style={StylesCss.container2}
                  data={Dinfo}
                  renderItem={({item}) => <TouchableOpacity onPress={()=> {ToastAndroid.show("Next Screen",ToastAndroid.SHORT)}}>
                                            <View flexDirection= 'row' justifyContent='space-between'>
                                                <View flexDirection='row' justifyContent='flex-start'>
                                                    <Badge status='error'/>
                                                    <View flexDirection='column'>
                                                        <Text style={StylesCss.big}>{item.Title}</Text>
                                                        <Text>{item.Date}</Text>
                                                    </View>
                                                </View>
                                                <View flexDirection='row' justifyContent='flex-end'>
                                                <Text alignItem='baseline' >{item.Sold}</Text>
                                                <Image alignItem = 'baseline'
                                                     name='RightNext'
                                                     style={{width:16, height:16}}
                                                     source={require('../Ressource/next.png')}/>                                  
                                                </View>
                                            </View>
                                          </TouchableOpacity>}/>

    )
  };
}