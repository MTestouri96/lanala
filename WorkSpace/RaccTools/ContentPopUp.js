import React, {Component} from 'react';
import {View, TouchableOpacity,ScrollView, ToastAndroid, Text, Image, TextInput,StyleSheet,Button} from 'react-native';
import StyleCss from '../StylesCSS/StylesCss';


const _renderSeparator = () => (<View style={StylesCss.Separator}/>)

export default class ContentPopUp extends Component {
    
    constructor(props) {
        super(props)
        this.state = { count: 0 }
      }

                        onPress = () => {
                            this.setState({
                              count: this.state.count+50
                              
                            })
                          }
                          onpres=()=>{
                              this.setState({
                                  count:this.state.count-50
                              })
                          }

    render () {
        return(
            <ScrollView>
                <View   style={StyleCss.bcPopUp}>

                    <Text ItemSeparatorComponent={_renderSeparator}>Price Range</Text>
                    
                    <View flexDirection= 'row' justifyContent= 'space-around' alignItem= 'baseline'>
                        <TouchableOpacity   onPress={this.onPress}>
                            <Image name='Add'
                                style={{width:35, height:30}}
                                source={require('../Ressource/add.png')}/>
                        </TouchableOpacity>    
                            <Text>$</Text>
                            
                    <View style={[styles.countContainer]} flexDirection= 'column'>
                          
                          <Text style={[styles.countText]}>
                            { this.state.count >= 0 ? this.state.count: null}
                           </Text>
                      </View>

                        <TouchableOpacity  onPress={this.onpres}>
                            <Image name='Remove'
                                style={{width:35, height:30}}
                                source={require('../Ressource/remove.png')}/>
                        </TouchableOpacity>
                    </View>  
                </View>
                <View style={StylesCss.containerbtn}>
                <Button title= 'Payer'
                         color="#B39DDB"
                        raised
                        onPress={()=> {/*Do Something*/}}/>
                        </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    countContainer: {
      alignItems: 'center',
     
      flexDirection:'column'
    },
    countText: {
      color: '#000000',
      fontSize: 30
    }
  })
  