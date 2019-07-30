
import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';
import { StyleSheet,View,Button,Text,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import Signup from'./Signup'
import main from'./main'
import setting from './setting'
import detailscreen from './detailscreen'

const TabNavigator = createBottomTabNavigator({
  main: { screen: main },
  Settings: { screen: setting },
  
}
);

const showdetails = createStackNavigator({
  details: { screen: detailscreen },},

)

const initNavigator = createStackNavigator({
  Profile: { screen: ProfileScreen },
  Home: {screen: HomeScreen},
  signup: {screen: Signup},                               },
  {
    navigationOptions :  {
      headerStyle: 
      {
        backgroundColor: 'red',
        textAlign: 'center',
      },
      alignSelf: 'center',
      headerTitleStyle:
      {
        fontWeight: 'bold',
        fontWeight: '300',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flex: 1

      },

    }
  }
 )

const MainNavigator = createStackNavigator({
  init: {screen:initNavigator},
  mainScreen: {screen: TabNavigator},
  detailscreen: {screen: showdetails}
},{defaultNavigationOptions: {header: null} });

const App = createAppContainer(MainNavigator);

export default App;

