///////////////// OUT

const [nome, setNome] = useState()

///////////////// IN RETURN

<TextInput
      underlineColorAndroid='transparent'
      style={styles.input} 
      placeholder={'Digite seu nome'}
      onChangeText={(nome) => setNome(nome)}
      />
