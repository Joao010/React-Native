/////OUT
const [valor, setValor] = useState()

/////IN
<Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
        value={valor}
        minimumTrackTintColor='green'
        maximumTrackTintColor='red'
      />
