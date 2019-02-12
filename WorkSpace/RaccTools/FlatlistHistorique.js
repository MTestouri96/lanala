import React, {Component} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import StylesCss from '../StylesCSS/StylesCss';
import InfoHisto from '../DataInfo/InfoHisto';
import {Badge} from 'react-native-elements';

const _renderSeparator = () => (<View style={StylesCss.Separator}/>)

export default class FlatlistHistorique extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        }

        render()   {
  
            return (
                  <FlatList ItemSeparatorComponent={_renderSeparator} 
                            style={StylesCss.container2}
                            data={InfoHisto}
                            renderItem={({item}) => <TouchableOpacity onPress={()=> (this.props.navigation.navigate('SoldScreen'))}>
                                                      <View flexDirection= 'row' justifyContent='space-between'>
                                                         <View flexDirection='row' justifyContent='flex-start'>
                                                           <Badge status='success'/>
                                                            <View flexDirection='column'>
                                                                <Text style={StylesCss.big}>{item.Title}</Text>
                                                                <Text>{item.Date}</Text>
                                                            </View>
                                                            
                                                           </View>
                                                          
                                                           <View flexDirection='row' justifyContent='flex-end'>
                                                            
                                                             <Text  textAlign='right' >{item.Sold}</Text>
                                                             <Image alignSelf= 'center'
                                                                name='RightNext'
                                                                style={{width:16, height:16}}
                                                                source={require('../Ressource/next.png')}/>                                  
                                                         </View>
                                                        </View>
                                                    </TouchableOpacity>}/>
          
              )
            };
          }