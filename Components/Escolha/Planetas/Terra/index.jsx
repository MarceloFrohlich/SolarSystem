import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import imgTerra from '../../../../assets/Terra.jpg';

export default function Terra() {
    return (
        <ScrollView style={planetas.container}>

            <Image
                source={imgTerra} style={planetas.principal}>

            </Image>

            <Text style={planetas.texto}>A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos depois.{'\n'}{'\n'} Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta, permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta. As propriedades físicas do planeta, bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período. Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos.

A sua superfície exterior está dividida em vários segmentos rígidos, chamados placas tectônicas, que migram sobre a superfície terrestre ao longo de milhões de anos. Cerca de 71% da superfície da Terra está coberta por oceanos de água salgada, com o restante consistindo de continentes e ilhas, os quais contêm muitos lagos e outros corpos de água que contribuem para a hidrosfera. Não se conhece a existência de água no estado líquido em equilíbrio, necessária à manutenção da vida como a conhecemos, na superfície de qualquer outro planeta. {'\n'}{'\n'}Os polos geográficos da Terra encontram-se maioritariamente cobertos por mantos de gelo ou por banquisas. O interior da Terra permanece ativo, com um manto espesso e relativamente sólido, um núcleo externo líquido que gera um campo magnético, e um núcleo interno sólido, composto sobretudo por ferro.

A Terra interage com outros objetos no espaço, em particular com o Sol e a Lua. No presente, a Terra orbita o Sol uma vez por cada 366,26 rotações sobre o seu próprio eixo, o que equivale a 365,26 dias solares ou um ano sideral. O eixo de rotação da Terra possui uma inclinação de 23,4° em relação à perpendicular ao seu plano orbital, produzindo variações sazonais na superfície do planeta com período igual a um ano tropical (365,24 dias solares). {'\n'}{'\n'}A Lua é o único satélite natural conhecido da Terra, tendo começado a orbitá-la há 4,53 bilhões de anos. É responsável pelas marés, estabiliza a inclinação axial da Terra e abranda gradualmente a rotação do planeta. Entre aproximadamente 4,1 e 3,8 bilhões de anos atrás, durante o intenso bombardeio tardio, impactos de asteroides causaram mudanças significativas na superfície terrestre.

Os recursos minerais da Terra em conjunto com os produtos da biosfera, fornecem recursos que são utilizados para suportar uma população humana global. Estes habitantes da Terra estão agrupados em cerca de 200 Estados soberanos, que interagem entre si por meio da diplomacia, viagens, comércio e ação militar. {'\n'}{'\n'}As culturas humanas desenvolveram várias crenças sobre o planeta, incluindo a sua personificação em uma deidade, a crença numa Terra plana, ou em que a Terra é o centro do universo, e uma perspectiva moderna do mundo como um ambiente integrado que requer proteção.
                
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