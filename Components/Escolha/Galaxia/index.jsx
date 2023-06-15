import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import imgGalaxia from '../../../assets/capa.jpg';

export default function Galaxia() {
    return (
        <ScrollView style={planetas.container}>

            <Image
                source={imgGalaxia} style={planetas.principal}>

            </Image>

            <Text style={planetas.texto}>
            Galáxia é uma grande estrutura formada por vários corpos celestes. A sua evolução e transformação foi descoberta pela ciência ao longo do processo de modernização dos estudos astronômicos. Porém, ainda há um conjunto de hipóteses relacionadas às galáxias que não foram comprovadas cientificamente.

As galáxias são classificadas conforme o seu formato. A principal e mais conhecida galáxia é a Via Láctea, justamente onde está localizado o Sistema Solar e o planeta Terra. A formação das galáxias está atrelada ao processo de origem do Universo. Essas estruturas evoluem por meio da ação de diversos fenômenos astronômicos.
        {'\n'}{'\n'}
        Há uma infinidade de galáxias no Universo. Porém, a maior parte delas ainda é desconhecida pela ciência. As dificuldades em termos de tecnologia e financiamento impedem um conhecimento maior desses corpos celestes. Mesmo assim, a astronomia já avançou no detalhamento das galáxias, em especial, as mais próximas da Terra. As principais galáxias estudadas pela ciência são:
        {'\n'}{'\n'}
        Via Láctea: Essa é a galáxia mais estudada e conhecida, em razão da sua importância para os seres terrestres, uma vez que é onde está localizada a Terra. A Via Láctea é formada, dentre outros, pelos corpos celestes que compõem o Sistema Solar. Essa galáxia possui uma estrutura complexa e bastante antiga. É um corpo dinâmico e possui uma vasta extensão.
        {'\n'}{'\n'}
        Andrômeda: Andrômeda é considerada uma galáxia importante em razão de sua dimensão e de sua proximidade com a Via Láctea. Sua estrutura é complexa e sua constituição se dá em elipse. Andrômeda apresenta dinamicidade e uma formação heterogênea. Essa galáxia, em razão da sua diminuta distância em relação ao Sistema Solar, pode ser vista a olho nu a partir da Terra.
        {'\n'}{'\n'}
        Galáxia do Triângulo: Essa é considerada a terceira galáxia em importância dentre as listadas. Ela é menor quando comparada às duas primeiras e possui uma estrutura formada por um número pequeno de corpos celestes. A Galáxia do Triângulo é do tipo espiral, ou seja, formada por grandes círculos.
        {'\n'}{'\n'}
        Nuvens de Magalhães: As Nuvens de Magalhães são estruturas formadas por galáxias de tamanhos diferentes: uma menor, chamada de Pequena Nuvem de Magalhães, e outra maior, denominada Grande Nuvem de Magalhães. Essas duas estruturas são consideradas galáxias-satélites da Via Láctea.
        {'\n'}{'\n'}

        
            </Text>
        </ScrollView>
    )
}

const planetas = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    principal: {
        width: 500,
        height: 300,
        flex: 1,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 30,
        resizeMode: 'contain'
    },
    texto: {
        textAlign: 'justify',
        paddingHorizontal: 30,
        lineHeight: 20,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 16,
    }
})