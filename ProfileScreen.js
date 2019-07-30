import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, View, Button, Text, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { placeholder } from '@babel/types';


export default class ProfileScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }

  }

  static navigationOptions = {
    title: 'Login',
  };

  handleUserName = (newtext) => {
    this.setState({
      username: newtext
    })
  }
  handlePassword = (typedtext) => {
    this.setState({
      password: typedtext
    })
  }
  handlebuttonpress = () => {

    if (this.state.username === "abdullah" && this.state.password === "abdullah1234") {
      //const {navigate} = this.props.navigation;
      // navigate('Home', {name: 'Jane'} )
      this.props.navigation.navigate('Home', { name: 'abdullah' })
      Alert.alert('Login success')
    }
    else {
      Alert.alert('WRONG USER NAME OR PASSWORD  PLEASE try AGAIN')
    }


  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground style={{
       // flex: 1,
       // alignSelf: 'stretch',
        height:'100%',
        width:'100%',
        position:'absolute',
        top:0

      }}
        source={require('./assests/background.png')}
      >



        <View style={styles.container}>
          <View style={styles.inputv}>
              <Text style={styles.TextStyless}>
                Username
              </Text>
            <TextInput
              style={styles.InputBOX}
              placeholder='Username'
              placeholderTextColor='red'
              onChangeText={this.handleUserName}
            />
            <Text style={{ color: 'blue', fontSize: 20 }}>
              Password
            </Text>
            <TextInput
              secureTextEntry={true}
              style={styles.InputBOX}
              onChangeText={this.handlePassword}
              placeholder='password'
              placeholderTextColor='red'
            />
            <Button
              style={styles.loginbuttonStyle}
              title="Go to Ali's profile"
              onPress={this.handlebuttonpress}
            />
            <TouchableOpacity activeOpacity={0.5} style={{marginTop: 15}} onPress={() => navigate('signup', {name: 'signup'})}>
              <View>
              <Text style={styles.forgottextstyle}>
              SIGN UP
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5}  style={{marginTop: 10}} onPress={()=> Alert.alert('New password have been send to your mail') }>
              <View>
      
              <Text style={styles.forgottextstyle}>
              forgort password ?
            </Text>
            </View>
            </TouchableOpacity>
             
            <TouchableOpacity activeOpacity={0.5} style={{marginTop: 15}} onPress={() => navigate('mainScreen', {name: 'main'})}>
              <View>
              <Text style={styles.forgottextstyle}>
              NOT NOW
            </Text>
            </View>
            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
     justifyContent:'space-between'
  },
  TextStyless: {
    fontSize: 20,
    color: 'blue'
  },
  InputBOX: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    color: 'red'
  },
  inputv: {
  //  marginTop: 300
  },
  loginbuttonStyle:{
  //  alignItems:'center',
    marginLeft:30,
    marginRight:30,
    backgroundColor:'red'
  //  width:50,
   },
   forgottextstyle:{
     color:'red',
     backgroundColor:'transparent',
     textAlign:'center'
   }
   

})