import React, {Component} from 'react';
import { Animated, ActivityIndicator, FlatList, Keyboard, TextInput, TouchableOpacity, Platform, StyleSheet, Text, View, Button, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      larAnimada:new Animated.Value(0),
    }
    Animated.timing(
      this.state.larAnimada,
      {
        toValue:100,
        duration:3000,
      },
    ).start()
  }

  //main
  render() {
    let porcentagem = this.state.larAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })

    return (
      //body
      <View style={styles.container}>

        <Animated.View style={{
          backgroundColor:'#4169e1',
          width:porcentagem,
          height:25
        }}></Animated.View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
  },
})
