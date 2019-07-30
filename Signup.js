import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet,View,Button,Text,TouchableOpacity,Image } from 'react-native';
import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';


export default class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
          username: "",
          password: "",
          confrimpassword:"",
          email:""
        }
      }
      handleUserName = (newtext) => {
        this.setState({
          username: newtext
        })
    }

    handleEmail=(newtext)=>{
        this.setState({
            email: newtext
        })
    }
   
     handlepassword=(newtext)=>{
         this.setState({
            password: newtext 
         })
     }

     handleconfrimpassword=(newtext)=>{
         this.setState({
             confrimpassword: newtext
         })
     }
     handleAll=()=>{
         if(this.state.password === this.state.confrimpassword)
     {
        this.props.navigation.navigate('Home', { name: 'abdullah' })
        Alert.alert('Login success')
     }
     else{
        Alert.alert('password do not match')
     }
     }


    static navigationOptions = {
      title: 'SignUp',
    headerStyle: {
      backgroundColor: 'red',
      textAlign: 'center',
    },
    alignSelf: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontWeight: '300',
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      marginRight:70,
      flex: 1

    },
    
    };
    render() {
      
      const {navigate} = this.props.navigation;
      return (
       <View style={styles.container}>
        <TextInput style={styles.inputtext} placeholder="Your Name"
         underlineColorAndroid={'transparent'} onChangeText={()=>{this.handleUserName}}/>

        <TextInput style={styles.inputtext} placeholder="Your email"
         underlineColorAndroid={'transparent'} onChangeText={()=>{this.handleEmail}}/>

        <TextInput style={styles.inputtext} placeholder="Your password"
         underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={()=>{this.handlepassword}}/>

        <TextInput style={styles.inputtext} placeholder="Your password"
         underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={()=>{this.handleconfrimpassword}}/>
        <Button onpress={()=>{this.handleAll}} title="SignUp"/>
       </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    inputtext:{
        alignSelf:'stretch',
        height: 40,
        paddingBottom:10,
        marginBottom:30,
        color:'black',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
    },

} )