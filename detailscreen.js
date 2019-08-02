import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StyleSheet,Dimensions,View,Button,Text,TouchableOpacity,Image,ScrollView } from 'react-native';
import React, { Component } from 'react';
// import console = require('console');


export default class detailscreen extends React.Component {

    constructor(){
        super()
        this.state = {
          item: "empty",
          screenWidth: "",
          screenHeight: ""
        }    
    }
    componentDidMount(){
      const screenWidth = Math.round(Dimensions.get('window').width);  
      const screenHeight = Math.round(Dimensions.get('window').height);  
      this.setState({
          item : this.props.navigation.getParam('itemId', 'NO-ID') ,
          screenWidth: screenWidth,
           screenHeight: screenHeight
    
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
     return(  
     
       < Text key={key} style = {{marginRight:10,color:'blue'}} > { item }  </Text>  
      
      
      
     
    
     )
    })
    
    return back;
  }
  return null;
}


    render() {  
      console.log(this.state.item)
      console.log("short")
      console.log(this.state.item.shortDescription)
      return (
       <ScrollView>  
         
         <View style={styles.container}>
         
        <View > 
          <Image style={{width: 180,height:180,marginTop:10,marginLeft:90 }}
                    source={{ uri: this.state.item.thumbnailUrl }} />
                    <Text style={{marginTop:5,marginLeft:5,color:'blue'}}>
                      Authours: 
                     </Text>
                     <View style = {{flexDirection:'row',alignItems:'flex-start',flexWrap: 'wrap'}}> 
                       {this.handleauthornames() }

                     </View> 
                    
                   
                   <Text> ISBN: {this.state.item.isbn}   </Text>        
                   <Text> longDescription: {this.state.item.longDescription}  </Text> 

                 <Text> shortDescription: {this.state.item.shortDescription}  </Text> 
                 <Text> shortDescription: {this.state.item.shortDescription}  </Text> 
                 <Text> shortDescription: {this.state.item.shortDescription}  </Text> 
                 <Text> shortDescription: {this.state.item.shortDescription}  </Text> 
                 <Text> shortDescription: {this.state.item.shortDescription}  </Text> 

                 
        </View> 
        

      </View>
        
         
           </ScrollView>
      
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