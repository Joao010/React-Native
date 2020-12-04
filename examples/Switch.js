/////OUT
const [valor, setValor] = useState(false)

/////IN
<Switch
        value={valor}
        onValueChange={(valorSwitch) => setValor(valorSwitch)}
        thumbColor='red'
      />
