///////////////// IN RETURN

<TextInput
      underlineColorAndroid='transparent'
      style={styles.input} 
      placeholder={'Digite seu nome'}
      onChangeText={(nome) => setNome(nome)}
      />
              
///////////////// OUT

const [nome, setNome] = useState()
