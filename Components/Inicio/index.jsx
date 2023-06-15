
import React from 'react';
import {StyleSheet, Text, View, Pressable } from 'react-native';


export default function Inicio(props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.botao}
        onPress={ () => {props.navigation.navigate('Escolha')} }  
      >
        <Text style={styles.botaoTitle}>Clique aqui para começar!</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={ () => {props.navigation.navigate('Sobre')} }  
      >
        <Text style={styles.botaoTitle}>Sobre!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    color: 'white',
  },
  botao:{
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cf9556',
    borderRadius: 25,
    paddingVertical: 5,
    marginTop: 50,
    marginBottom: 10,
  },
  botaoTitle: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
