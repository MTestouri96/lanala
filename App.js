import React, {Component} from 'react';
import HomeScreen from './WorkSpace/Screens/HomeScreen';
import LoginScreen from './WorkSpace/Screens/LoginScreen';
import SoldScreen from './WorkSpace/Screens/SoldScreen';
import ModalPopUp from './WorkSpace/RaccTools/ModalPopUp';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HistoriqueScreen from './WorkSpace/Screens/HistoriqueScreen';

const RootStack = createStackNavigator({
LoginScreen: {screen: LoginScreen},
HomeScreen: {screen: HomeScreen},
SoldScreen: {screen: SoldScreen},
ModalPopUp:{screen: ModalPopUp},
HistoriqueScreen:{screen: HistoriqueScreen}
},
{
  initialRouteName: 'SoldScreen',
},);
const apcn = createAppContainer(RootStack) ;
export default apcn;
  