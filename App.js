import React, {Component} from 'react';
import HomeScreen from './WorkSpace/Screens/HomeScreen';
import LoginScreen from './WorkSpace/Screens/LoginScreen';
import SoldScreen from './WorkSpace/Screens/SoldScreen';
import ModalPopUp from './WorkSpace/RaccTools/ModalPopUp';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const RootStack = createStackNavigator({
LoginScreen: {screen: LoginScreen},
HomeScreen: {screen: HomeScreen},
SoldScreen: {screen: SoldScreen},
ModalPopUp:{screen: ModalPopUp}
},
{
  initialRouteName: 'LoginScreen',
},);
export default createAppContainer( RootStack)  ;
  