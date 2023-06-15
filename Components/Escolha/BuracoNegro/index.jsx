import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import imgBuracoNegro from '../../../assets/Gargantua.jpg';

export default function BuracoNegro() {
    return (
        <ScrollView style={planetas.container}>

            <Image
                source={imgBuracoNegro} style={planetas.principal}>

            </Image>

            <Text style={planetas.texto}>Buraco negro é uma região do espaço-tempo em que o campo gravitacional é tão intenso que nada — nenhuma partícula ou radiação eletromagnética como a luz — pode escapar. A teoria da relatividade geral prevê que uma massa suficientemente compacta pode deformar o espaço-tempo para formar um buraco negro. O limite da região da qual não é possível escapar é chamado de horizonte de eventos. Embora o horizonte de eventos tenha um efeito enorme sobre o destino e as circunstâncias de um objeto que o atravessa, não tem nenhuma característica local detectável. De muitas maneiras, um buraco negro age como um corpo negro ideal, pois não reflete luz.{'\n'}{'\n'} Além disso, a teoria quântica de campos no espaço-tempo curvo prevê que os horizontes de eventos emitem radiação Hawking, com o mesmo espectro que um corpo negro de temperatura inversamente proporcional à sua massa. Essa temperatura é da ordem dos bilionésimos de um kelvin para buracos negros de massa estelar, o que a torna praticamente impossível de observar.
                {'\n'}{'\n'}
                Objetos cujos campos gravitacionais são fortes demais para a luz escapar foram considerados pela primeira vez no século XVIII por John Michell e Pierre-Simon Laplace. A primeira solução moderna da relatividade geral que caracterizaria um buraco negro foi encontrada por Karl Schwarzschild em 1916, embora sua interpretação como uma região do espaço da qual nada possa escapar tenha sido publicada pela primeira vez por David Finkelstein em 1958. Os buracos negros eram há muito considerados uma curiosidade matemática; foi na década de 1960 que o trabalho teórico mostrou que eram uma previsão genérica da relatividade geral. A descoberta de estrelas de nêutrons por Jocelyn Bell Burnell em 1967 despertou o interesse em objetos compactos em colapso gravitacional como uma possível realidade astrofísica.
                {'\n'}{'\n'}
                Espera-se a formação de buracos negros de massa estelar quando estrelas muito massivas colapsam no final de seu ciclo de vida. Após a formação de um buraco negro, ele pode continuar a crescer absorvendo a massa do ambiente. Ao absorver outras estrelas e se fundir com outros buracos negros, buracos negros supermassivos de milhões de massas solares (M☉) podem se formar. Há consenso de que existem buracos negros supermassivos no centro da maioria das galáxias. A presença de um buraco negro pode ser inferida por meio da interação com outra matéria e com radiação eletromagnética, como a luz visível. A matéria que cai em um buraco negro pode formar um disco de acreção externa aquecido por fricção, formando alguns dos objetos mais brilhantes do universo. {'\n'}{'\n'}Se houver outras estrelas orbitando um buraco negro, suas órbitas podem ser usadas para determinar a massa e a localização do buraco negro. Tais observações podem ser usadas para excluir possíveis alternativas, como estrelas de nêutrons. Dessa maneira, os astrônomos identificaram inúmeros candidatos a buracos negros estelares em sistemas binários e estabeleceram que a fonte de rádio conhecida como Sagitário A *, no núcleo da Via Láctea, contém um buraco negro supermassivo de cerca de 4,3 milhões de massas solares.
                {'\n'}{'\n'}
                Em 11 de fevereiro de 2016, a colaboração do LIGO anunciou a primeira detecção direta de ondas gravitacionais, o que também representou a primeira observação de uma fusão de buracos negros. Em dezembro de 2018, foram observados onze ondas gravitacionais originadas de dez buracos negros em fusão (junto com uma fusão binária de estrela de nêutrons). Em 10 de abril de 2019, a primeira imagem direta de um buraco negro e sua vizinhança foi publicada, após observações feitas pelo Event Horizon Telescope em 2017 do buraco negro supermassivo no centro galáctico de Messier 87.

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