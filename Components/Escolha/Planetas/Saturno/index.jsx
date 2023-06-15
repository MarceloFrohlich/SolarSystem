import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import imgSaturno from '../../../../assets/Saturno.jpg';

export default function Saturno() {
    return (
        <ScrollView style={planetas.container}>

            <Image
                source={imgSaturno} style={planetas.principal}>

            </Image>

            <Text style={planetas.texto}>Saturno é o sexto planeta do Sistema Solar — contando-se a partir da distância do sol —, sendo mais conhecido pelos anéis que o circundam. Trata-se do segundo maior planeta desse sistema, atrás apenas de Júpiter, apresentando um diâmetro de 120 536 km, que é cerca de nove vezes maior que o diâmetro equatorial terrestre.

                O movimento de rotação do planeta Saturno é bastante acelerado, o que reverbera no achatamento de seus polos. No total, o planeta leva cerca de 10 horas e 39 minutos para completar uma volta em torno de si mesmo, enquanto o seu movimento de translação leva cerca de 29 anos, 167 dias e 6 horas terrestres para completar-se.
                {'\n'}{'\n'}
                Os anéis de Saturno são formados por vários pequenos anéis separados entre si por algumas fendas, sendo a mais notável delas a Divisão de Cassini, que separa os anéis A e B. A origem desses anéis ainda não foi totalmente provada, havendo várias teorias. É bem possível que eles sejam originários de partículas de luas do planeta que foram atingidas por asteroides e destruídas. A composição desses anéis também não é totalmente conhecida, mas são predominantemente formados por partículas de rochas e gelo.

                Saturno, como sabemos, é um planeta gasoso, sendo basicamente composto de hidrogênio. Ele possui a peculiaridade de ser menos denso do que a água, ou seja, se fosse possível “mergulhá-lo” em uma bacia d'água, ele flutuaria! Na superfície do planeta, os ventos movem-se muito rapidamente e podem alcançar incríveis 1800 km/h, o que seria quatro vezes mais rápido do que a maioria dos furacões aqui da Terra.
                {'\n'}{'\n'}
                A atmosfera de Saturno também é predominantemente composta por hidrogênio (97%), além de gás hélio (3%) e gás metano (0,05%). Além disso, existem nuvens formadas provavelmente por amônia congelada, o que dá um tom branco para a aparência atmosférica, isso sem falar em algumas outras nuvens de outras colorações, cujas composições ainda não são totalmente conhecidas.
                {'\n'}{'\n'}
                O planeta Saturno possui um grande número de satélites naturais, sendo que, até o momento, já foram confirmados sessenta luas, incluindo Titã, que é o segundo maior satélite do sistema solar.

                Todas as observações realizadas sobre o planeta saturno foram executadas pelas sondas Pionner XI e Voyager I e II, de forma que toda e qualquer informação específica sobre esse planeta só começou a ser levantada a partir do final da década de 1970. Antes disso, tudo era muito misterioso, o que levava à difusão de várias dúvidas sobre como seria formado esse curioso planeta do sistema solar.
            </Text>

        </ScrollView>
    )
}

const planetas = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    principal: {
        width: 300,
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