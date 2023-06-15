import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sobre from './Components/Sobre/';
import Inicio from './Components/Inicio/';
import Escolha from './Components/Escolha/';
import BuracoNegro from './Components/Escolha/BuracoNegro';
import Galaxia from './Components/Escolha/Galaxia';
import Planetas from './Components/Escolha/Planetas';
import Jupiter from './Components/Escolha/Planetas/Jupiter';
import Marte from './Components/Escolha/Planetas/Marte';
import Mercurio from './Components/Escolha/Planetas/Mercurio';
import Netuno from './Components/Escolha/Planetas/Netuno';
import Saturno from './Components/Escolha/Planetas/Saturno';
import Terra from './Components/Escolha/Planetas/Terra';
import Urano from './Components/Escolha/Planetas/Urano';
import Venus from './Components/Escolha/Planetas/Venus';


const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTitleStyle: {color: 'white'}, headerTitleAlign: 'center'}  }>
          <Stack.Screen name='Inicio' component={Inicio} />
          <Stack.Screen name='Sobre' component={Sobre} />
          <Stack.Screen name='Escolha' component={Escolha} />
          <Stack.Screen name='BuracoNegro' component={BuracoNegro} />
          <Stack.Screen name='Galaxia' component={Galaxia} />
          <Stack.Screen name='Planetas' component={Planetas} />
          <Stack.Screen name='Jupiter' component={Jupiter} />
          <Stack.Screen name='Marte' component={Marte} />
          <Stack.Screen name='Mercurio' component={Mercurio} />
          <Stack.Screen name='Netuno' component={Netuno} />
          <Stack.Screen name='Saturno' component={Saturno} />
          <Stack.Screen name='Terra' component={Terra} />
          <Stack.Screen name='Urano' component={Urano} />
          <Stack.Screen name='Venus' component={Venus} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
