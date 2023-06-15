import React from 'react';
import { StyleSheet, Text, View, Linking, Image, Pressable } from 'react-native';
import LogoWP from '../../assets/WP.png'
import LogoLD from '../../assets/linkedin.png'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Created by Marcelo Frohlich</Text>

      <View style={styles.containericones}>
        <Pressable
          onPress={() => {
            Linking.openURL('whatsapp://send?text=Olá, gostaria de conversar sobre seu projeto!&phone=+5521998259004');
          }}>
          <Image style={styles.linkWP} source={LogoWP}></Image>
        </Pressable>

        <Pressable
          onPress={() => {
            Linking.openURL('https://www.linkedin.com/in/marcelofrohlich/');
          }}>
          <Image style={styles.linkLD} source={LogoLD}></Image>
        </Pressable>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
  },
  linkWP: {
    width: 100,
    height: 100,
  },
  linkLD: {
    width: 90,
    height: 90,
  },
  containericones:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    height: 300,
    width: 300,
    borderWidth: 2,
  }
});