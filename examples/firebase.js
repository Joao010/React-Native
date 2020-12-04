const [nome, setNome] = useState('Carregando...')
useEffect(() => {

    async function dados(){
      await firebase.database().ref('nome').on('value', (snapshot) => {
        setNome(snapshot.val())
      })
    }

    dados()

  }, [])
