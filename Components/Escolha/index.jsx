import React from 'react';
import { View, StyleSheet, Text, Pressable, ImageBackground } from 'react-native';

import BackPlanetas from '../../assets/Sistema-solar.jpg';
import BackGargantua from '../../assets/Gargantua.jpg';
import BackGalaxia from '../../assets/capa.jpg';

export default function Escolha(props) {
  return (
    <View style={inicio.container}>
      <Pressable
        style={inicio.card}
        onPress={() => { props.navigation.navigate('Planetas') }}
      >
        <ImageBackground source={BackPlanetas} style={inicio.imagem}>
          <Text style={inicio.texto}>Planetas</Text>
        </ImageBackground>

      </Pressable>

      <Pressable
        style={inicio.card}
        onPress={() => { props.navigation.navigate('BuracoNegro') }}
      >
        <ImageBackground source={BackGargantua} style={inicio.imagem}>
          <Text style={inicio.texto}>Buraco Negro</Text>
        </ImageBackground>
      </Pressable>

      <Pressable
        style={inicio.card}
        onPress={() => { props.navigation.navigate('Galaxia') }}
      >
        <ImageBackground source={BackGalaxia} style={inicio.imagem}>
          <Text style={inicio.texto}>Galaxias</Text>
        </ImageBackground>
      </Pressable>

    </View>
  );
}

const inicio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 200,
    width: 300,
    marginBottom: 35,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  botao: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cf9556',
    paddingVertical: 5,
    marginTop: 50,
    marginBottom: 10,
  },
  botaoTitle: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 20,
    width: 200,
    paddingVertical: 8,
    alignSelf: 'center'
  
  },
  imagem: {
    flex: 1,
    height: 200,
    width: 300,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end'
  }
})