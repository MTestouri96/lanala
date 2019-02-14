import React, {Component} from 'react';
import {View, Text,FlatList,TouchableHighlight,Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import FlatListHome from '../RaccTools/FlatListHome';
import StylesCss from '../StylesCSS/StylesCss';

const _renderSeparator = () => (<View style={StylesCss.Separator}/>)


export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
   }

render()   {
  return (
  <View style={StylesCss.bcgrndC}>
    <View  style={StylesCss.container1} flexDirection= 'row' justifyContent= 'flex-start'>    
      <Avatar size= 'medium'
              rounded
              source={require('../Ressource/avatar.png')}
              />
      <View flexDirection='column'>
        <Text style={StylesCss.Sname}>Rahul Sharrna</Text>
        <Text>Online</Text>
      </View> 
    </View>
    <FlatList ItemSeparatorComponent={_renderSeparator} 
                  style={StylesCss.container2}
                  data={Dinfo}
                  renderItem={({item}) => 
                          
                  <TouchableHighlight onPress={()=>  (this.props.navigation.navigate('SoldScreen'))}>
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
                    </TouchableHighlight>      }
                                          />
  </View>
  );
}
}