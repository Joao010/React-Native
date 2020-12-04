/////CONSTRUCTOR
const [loading, setLoading] = useState(true)

/////IN VIEW
{
  loading 
  ? <ActivityIndicator color='#416fe1' size={45}/> 
  : <FlatList
    keyExtractor={item => item.key}
    data={usuarios}
    renderItem={({item}) => <Listagem data={item}/>}
    />
}

/////AT THE CHOSEN TIME TO STOP
setLoading(false) 
