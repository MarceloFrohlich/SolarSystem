import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import imgMarte from '../../../../assets/Marte.jpg';

export default function Marte() {
    return (
        <ScrollView style={planetas.container}>

            <Image
                source={imgMarte} style={planetas.principal}>

            </Image>

            <Text style={planetas.texto}>Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.

                Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, vales, desertos e calotas polares da Terra. O período de rotação e os ciclos sazonais de Marte são também semelhantes aos da Terra, assim como é a inclinação que produz as suas estações do ano.{'\n'}{'\n'} Marte é o lar do Monte Olimpo, a segunda montanha mais alta conhecida no Sistema Solar (a mais alta em um planeta), e do Valles Marineris, um desfiladeiro gigantesco. A suave Bacia Polar Norte, no hemisfério norte marciano, cobre cerca de 40% do planeta e pode ser uma enorme marca de impacto. Marte tem duas luas conhecidas, Fobos e Deimos, que são pequenas e de forma irregular. Estas luas podem ser asteroides capturados, semelhante ao 5261 Eureka, um asteroide troiano marciano.
                {'\n'}{'\n'}
                Marte está sendo explorado por oito espaçonaves atualmente: seis em órbita — Mars Odyssey, Mars Express, Mars Reconnaissance Orbiter, Mars Atmosphere and Volatile Evolution Missile – MAVEN, Mars Orbiter Mission e ExoMars Trace Gas Orbiter — e duas na superfície — Mars Science Laboratory Curiosity, Perseverance e o rover chinês Zhurong, como também o lander InSight. Entre as espaçonaves desativadas que estão na superfície marciana estão a sonda Spirit e várias outras sondas e rovers, como a Phoenix, que completou sua missão em 2008, e o Opportunity.
                {'\n'}{'\n'}
                Marte tem aproximadamente metade do diâmetro da Terra. Ele é menos denso do que a Terra, tendo cerca de 15% do seu volume e 11% de sua massa, resultando em uma aceleração da gravidade na superfície que é cerca de 38% da que se observa na Terra. A superfície marciana é apenas ligeiramente menor do que a área total de terra firme do planeta Terra. Apesar de Marte ser maior e mais massivo do que Mercúrio, este tem uma densidade mais elevada, com o que os dois planetas têm uma força gravitacional quase idêntica na superfície — a de Marte é mais forte por menos do que 1%. {'\n'}{'\n'}A aparência vermelho-alaranjada da superfície marciana é causada pelo óxido de ferro, mais comumente conhecido como hematita, ou ferrugem. Pode também parecer caramelo, enquanto outras cores comuns de superfície incluem dourado, marrom e esverdeado, dependendo dos minerais presentes. Estudo sugere que Marte teve um anel bilhões de anos atrás.
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