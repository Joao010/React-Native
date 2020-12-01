import React, {useState, useEffect, useMemo, useRef} from 'react';
import { Animated, ActivityIndicator, FlatList, Keyboard, TextInput, TouchableOpacity, Platform, StyleSheet, Text, View, Button, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function App() {
  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')
  const nomeInput = useRef(null)

  //didMount
  useEffect(() => {
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes')
      if(nomeStorage !== null){
        setNome(nomeStorage)
      }
    }

    getStorage()
  }, [])

  //didUpdate
  useEffect(() => {
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome)
    }

    saveStorage()
  }, [nome])

  function alteraNome(){
    setNome(input)
    setInput('')
  }

  function novoNome(){
    nomeInput.current.focus()
  }
  
  const letrasNome = useMemo(() => {
    alert('Mudou a letra')
    return nome.length
  }, [nome])

  return(
    <View>

      <TextInput
      style={{height:40}}
      placeholder='Seu nome...'
      value={input}
      onChangeText={(texto) => setInput(texto)}
      ref={nomeInput}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera Nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>{letrasNome}</Text>

      <TouchableOpacity onPress={novoNome}><Text>novo nome</Text></TouchableOpacity>

    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:15,
  },
  texto:{
    color:'black',
    fontSize:35,
  },
  btn:{
    backgroundColor:'grey',
    alignItems:'center',
    height:40,
  },
  btnText:{
    fontSize:15,
    color:'white',
  }
})
