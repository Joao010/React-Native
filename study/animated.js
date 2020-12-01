import React, {Component} from 'react';
import { Animated, ActivityIndicator, FlatList, Keyboard, TextInput, TouchableOpacity, Platform, StyleSheet, Text, View, Button, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      larAnimada:new Animated.Value(150),
      altAnimada:new Animated.Value(50),
      opAnimada:new Animated.Value(0),
    };
    this.carregarGrafico = this.carregarGrafico.bind(this)
  }

  carregarGrafico(){
    Animated.sequence([
      Animated.timing(
        this.state.opAnimada,
        {
          toValue:1,
          duration:1000,
        },
      ),
      Animated.timing(
        this.state.altAnimada,
        {
          toValue:300,
          duration:1000,
        },
      ),
    ]).start()
  }

  //main
  render() {
    return (
      //body
      <View style={styles.container}>

        <View style={{height:80, 
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#4169e1',}}>

          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text style={{fontSize:25, color:'white',}}>Gerar Gráfico</Text>
          </TouchableOpacity>

        </View>

        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'flex-end'}}>
          <Animated.Text style={{opacity:this.state.opAnimada}}>Vendas</Animated.Text>
          <Animated.View style={{
            width:this.state.larAnimada, 
            height:this.state.altAnimada,
            opacity:this.state.opAnimada, 
            backgroundColor:'#4169e1', 
            justifyContent:'center',
            borderRadius:25,
            }}>
            <Text style={{color:'white', fontSize:20, textAlign:'center', opacity: this.state.opacidadeAnimada}}>R$150,50</Text>
          </Animated.View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})
