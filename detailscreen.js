import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet,View,Button,Text,TouchableOpacity,Image } from 'react-native';
import React, { Component } from 'react';
// import console = require('console');


export default class detailscreen extends React.Component {

    constructor(){
        super()
        this.state = {
          item: "empty"
        }    
    }
    componentDidMount(){
      
      this.setState({
          item : this.props.navigation.getParam('itemId', 'NO-ID') ,
          

      })
     
  }



  static navigationOptions = ({ navigation }) => {
    
    return {
      title: navigation.getParam('itemId', 'A Nested Details Screen').title,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('mainScreen', {name: 'main'})}>
      <Image
        style={{resizeMode:'contain',height:30,width:30,margin:10}}
        source={require('./assests/backbutton.png')}
      />
      </TouchableOpacity>
    
      ),
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
      flex: 1

    },
  }
}


handleauthornames = () => {
  console.log("in function1")
  
  if (this.state.item !== "empty")
  {
    var back = this.state.item.authors.map((item, key)=>{ 
     return(   <Text key={key} style = {{marginLeft:25,color:'blue'}} > { item }  </Text>)
    })
    console.log("in function")
    console.log(back)
    return back;
  }
  return null;
}


    render() {  
      console.log(this.state.item)
      console.log("short")
      console.log(this.state.item.shortDescription)
      return (
       
      <View style={styles.container}>
         
        <View > 
          <Image style={{width: 180,height:180,marginTop:10,marginLeft:90 }}
                    source={{ uri: this.state.item.thumbnailUrl }} />
                    <Text style={{marginTop:5,marginLeft:25,color:'blue'}}>
                      Authours: 
                     </Text>

                       {this.handleauthornames() }


                    
                   
                   <Text> ISBN: {this.state.item.isbn}   </Text>        
                 <Text> shortDescription: {this.state.item.shortDescription}  </Text> 
                 
        </View> 
        

      </View>
        
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
       justifyContent:'space-between'
    },
    acontain:{
    
    }
  })