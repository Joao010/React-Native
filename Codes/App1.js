import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Switch, Button } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      nome: '',
      idade: '',
      index: 0, //picker
      sexos: [ //picker
        {key:1, nome: 'Masculino'},
        {key:2, nome: 'Feminino'},
        {key:3, nome: 'Não Bivalente'}
      ],
      
      limite: 0.0, //slider
      status: false, //switch
    }
    this.pegaNome = this.pegaNome.bind(this)
    this.pegaIdade = this.pegaIdade.bind(this)
  }

  pegaNome(nome){
    this.setState({nome: nome})
  }

  pegaIdade(idade){
    this.setState({idade: idade})
  }

  //main
  render(){

    let sexosItem = this.state.sexos.map( (value, key) =>{
      return <Picker.Item key={key} value={key} label={value.nome}/>
    })

    return(
      //body
      <View sytle={styles.container}>

        <Text style={styles.titulo}>Banco React</Text>

        <Text style={styles.texto}>Nome:</Text>
        <TextInput
        underlineColorAndroid='transparent'
        style={styles.input} 
        placeholder={'Digite seu nome'}
        onChangeText={this.pegaNome}
        />

        <Text style={styles.texto}>Idade:</Text>
        <TextInput
        underlineColorAndroid='transparent'
        style={styles.input} 
        placeholder={'Digite sua Idade'}
        onChangeText={this.pegaIdade}
        keyboardType='numeric'
        />

        <Text>{'\n'}</Text>
        <Text style={styles.texto}>Sexo:</Text>
        <Picker
        selectedValue={this.state.index}
        onValueChange={(itemValue, itemIndex) => this.setState({index: itemValue})}
        style={styles.input}
        >
          {sexosItem}
        </Picker>

        <Text>{'\n'}</Text>
        <Text style={styles.texto}>Seu limite:</Text>
        <Slider
        minimumValue={0}
        maximumValue={100}
        style = {styles.slider}
        onValueChange={(valorSelecionado) => this.setState({limite: valorSelecionado})}
        value={this.state.limite}
        minimumTrackTintColor='#0984e3'
        maximumTrackTintColor='#2d3436'
        thumbTintColor='#273c75'
        />
        <Text style={styles.texto}>R$ {this.state.limite.toFixed(2)}</Text>

        <Text>{'\n'}</Text>
        <Text style={styles.texto}>Estudante? </Text>
        <Switch
        value={this.state.status}
        onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
        thumbColor='#0984e3'
        trackColor='#74b9ff'
        style={styles.switch}
        />

        <Text>{'\n'}</Text>
        <Button
        color='#00a8ff'
        title='Abrir Conta'
        onPress={()=>{
          if(this.state.idade == '' || this.state.nome == ''){
            alert('Digite as informações corretamente')
            return
          }
          alert('Conta Aberta com sucesso!\nNome: '
          +this.state.nome+
          '\nIdade: '
          +this.state.idade+
          '\nSexo: '
          +this.state.sexos[this.state.index].nome+
          '\nLimite: R$ '
          +this.state.limite.toFixed(2)+
          ((this.state.status) ? '\nÉ estudante' : '\nNão é estudante'))
        }}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  titulo:{
    fontSize: 40,
    marginTop: 25,
    fontWeight: 'bold',
    color:'white',
    textAlign: 'center',
    backgroundColor: '#00a8ff'
  },
  input:{
    height:40,
    textAlign: 'center',
    borderWidth: 1,
    color: '#00a8ff',
    borderColor: '#00a8ff',
    borderRadius: 30,
    margin: 10,
    fontSize: 15,
    padding: 10,
  },
  texto:{
    fontSize:20,
    textAlign:'center',
    color:'#00a8ff',
  },
  switch:{
    alignSelf:'center',
  },
  slider:{
    height: 25,
    backgroundColor:'#dfe6e9',
  },
})
