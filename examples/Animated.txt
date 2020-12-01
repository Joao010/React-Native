///////////////////////// IN CONSTUCTOR
    Animated.parallel([
      Animated.timing(
        this.state.larAnimado,
        {
          toValue: 300,
          duration: 2000,
        },
      ),
      Animated.timing(
        this.state.altAnimado,
        {
          toValue:300,
          duration:2000,
        },
      ),
    ]).start()

///////////////////////// IN VIEW

<Animated.View style={{
          width:this.state.larAnimado, 
          height:this.state.altAnimado, 
          backgroundColor:'#4169e1', 
          justifyContent:'center',
          opacity: this.state.opacidadeAnimada,
          }}>
          <Text style={{color:'white', fontSize:22, textAlign:'center'}}>Carregando...</Text>
        </Animated.View>

