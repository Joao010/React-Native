///////////////// IN VIEW

<TextInput
        underlineColorAndroid='transparent'
        style={styles.input} 
        placeholder={'Digite seu nome'}
        onChangeText={this.pegaNome}
        />

///////////////// IN CONSTRUCTOR

this.pegaNome = this.pegaNome.bind(this)

///////////////// OUT

pegaNome(nome){
    this.setState({nome: nome})
  }
