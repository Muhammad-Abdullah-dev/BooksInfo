import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, ToastAndroid } from 'react-native';//ToastAndroid
import React, { Component } from 'react';

export default class main extends React.Component {




    constructor() {
        super()
        this.state = {
            dataSource: [],
            isLoading: true
        }

    }

    showdetails = (item) => {
        console.log("this is in a showdetail function")
        ToastAndroid.show(item.item.title, ToastAndroid.SHORT)
        this.props.navigation.navigate('details', { itemId: item.item });

        // console.log(item)
        // console.log(item.item.title)

    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                onPress={() => this.showdetails({ item })}
            >
                <Image style={{ width: 80, height: 80, margin: 5 }}
                    source={{ uri: item.thumbnailUrl }} />
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
                    <Text style={{ fontSize: 18, color: 'green', marginBottom: 15 }} >
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: 16, color: 'red' }}>
                        {item.authors}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{ height: 1, width: '100%', backgroundColor: 'black' }}>

            </View>
        )
    }

    componentDidMount() {
        const url = 'http://www.mocky.io/v2/5d308d7f320000b0572045c0'
        fetch(url)
            .then((response) => response.json()

            )
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoading) {
            return (

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>

            );
        }
        else {
            return (
                <View style={StyleSheet.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            );
        }

    }
}

/*class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }*/

//   const TabNavigator = createBottomTabNavigator({
//     main: { screen: main },
//     Settings: { screen: SettingsScreen },
//   });

//   export default createAppContainer(TabNavigator);


//   const styles = StyleSheet.create({
//       container:{
//           flex:1,
//           backgroundColor:'#F5FCFF'
//       }
//   })