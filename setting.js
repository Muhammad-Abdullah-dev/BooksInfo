import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet,View,Button,Text,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export default class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }