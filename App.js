import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button, ScrollView, FlatList } from 'react-native';
export default function App() {
  const [nome,setNome] = useState('');
  const [nomes,setNomes] = useState([]);
  const [numero,setNumero] = useState('');
 
  const [contadorContato,setContadorContato] =useState (0);
  const capturarNomes = (digitado) => {
    setNome(digitado);
  }
  const capturarNumero = (digitado) => {
    setNumero(digitado);
  }
  const adicionarContato =() =>{
    setNomes(nomes => {
        setContadorContato(contadorContato+1);
        return [{key:setContadorContato.toString(), a:nome},{key:setContadorContato.toString(), b:numero},...nomes]
        
    })
      console.log(nome,numero);
    }
  return (
    <View style={styles.telaPrincipalView}>
    <View style={styles.lembreteView}>
      {/*usuario irá inserir lembretes aqui*/}
      <TextInput
        placeholder="digite o nome do contato"
        style={styles.lembreteTextInput}
        onChangeText={capturarNomes
        }
        value={nome}
      
      />
      <TextInput
        placeholder="digite o numero de telefone do contato"
        style={styles.lembreteTextInput}
        onChangeText={capturarNumero}
        value={numero}
      
      />
      <View style={{width: '80%' , marginTop: 8}}>
      <Button title="Adicionar contato"
        onPress={adicionarContato}
      />
      </View>

      <View style={{width: '80%' , marginTop: 8}}>
      <Button title="limpar nomes"
        onPress={() => setNomes([])}
      />
      </View>
    </View>
    <View>
      <FlatList
        data={nomes}
        renderItem={
          nome => (
            <View style={styles.itemNaLista}>
              <Text>{nome.item.a}</Text>
              <Text>{nome.item.b}</Text>
              
              
            </View>
          )
        }
      
      />
        
      {/*aqui será exibida a lista de lembretes
      <ScrollView>
      {
        lembretes.map(lembrete => 
          <View
          style={styles.itemNaLista}
           key={lembrete}>
        <Text style={{fontSize:16,textAlign:'center'}} >{lembrete}</Text>
        </View>)
      }

      </ScrollView>

*/
}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
 telaPrincipalView:{
   padding: 20
   backgroundColor: "darkgrey"
   
 },
 lembreteView:{
  flexDirection: 'column',
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom:12
 },
 lembreteTextInput:{
  width: '88%',
  borderBottomColor:"red",
  borderBottomWidth: 1,
  marginBottom:4,
  padding:2
 },

 itemNaLista: {
   padding:16,
   backgroundColor: '#EEE', 
   borderColor: '#000',
   borderWidth:1,
   marginBottom:10,
   borderRadius:12,
   fontSize:16,
   width: '80%',
   alignSelf: 'center' 
 }
  
});
