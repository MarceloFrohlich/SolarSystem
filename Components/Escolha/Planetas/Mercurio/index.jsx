import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import imgMercurio from '../../../../assets/Mercurio.jpg';

export default function Mercurio() {
    return (
        <ScrollView style={planetas.container}>

            <Image
                source={imgMercurio} style={planetas.principal}>

            </Image>

            <Text style={planetas.texto}>Mercúrio é o primeiro planeta do sistema solar, a contar a partir da proximidade com o Sol, distando-se em apenas 57,9 milhões de quilômetros da estrela em média. Com um diâmetro de 4878 km, é o menor entre os planetas do nosso sistema solar e também o que realiza mais rapidamente o seu movimento de translação, executado a uma velocidade de aproximadamente 47,87 km/s, levando, assim, 88 dias para completar sua volta ao redor do sol.

                Quanto ao movimento de rotação, o planeta Mercúrio executa-o apenas três vezes durante duas órbitas de translação, o que faz com que o seu dia solar seja o equivalente a 173 dias terrestres. Além disso, esse movimento de rotação acontece com o seu eixo perpendicular ao plano da órbita, por isso, Mercúrio não apresenta estações do ano e alguns locais não recebem a luz do sol.{"\n"}{"\n"}

                A atmosfera de Mercúrio é basicamente composta por átomos de árgon, néon e hélio e apresenta uma pressão muito baixa, cerca de um bilhão de vezes menor do que a da Terra ao nível do mar. As altas temperaturas, em razão da proximidade com o sol, fazem com que esses átomos se dispersem pelo espaço, o que tem como consequências: o pequeno índice de erosão hídrica e eólica; a baixa proteção da atmosfera frente a meteoritos e a incapacidade de se conservar as médias térmicas. Por conta desse último fator, as temperaturas no planeta Mercúrio variam entre 430ºC e -170ºC durante a noite.
                {"\n"}{"\n"}
                A superfície de Mercúrio é relativamente semelhante à da Lua, com uma grande quantidade de crateras formadas pelo impacto dos meteoritos que atingiram o planeta. A ausência de agentes erosivos de transformação do relevo faz com que essas crateras permaneçam conservadas durante muito tempo. A maior delas é a Bacia Caloris, formada há milhares de anos e com um diâmetro de 1550 km de extensão.

                O planeta Mercúrio recebe esse nome em virtude do seu acelerado movimento de translação, o que faz com que ele se mova mais rapidamente no céu do que os demais corpos celestes visíveis. Na mitologia romana, Mercúrio era o mensageiro dos deuses por ser o mais rápido entre todos os seres do mundo.{"\n"}{"\n"}

                Graças à sua proximidade com o sol, é muito difícil observar Mercúrio, o que só é possível próximo ao nascer do sol e logo após o entardecer. A maioria das informações é proveniente da sonda Mariner 10, enviada em 1973, e da sonda Messenger, enviada pela Agência Espacial Americana (NASA) em 2008. Recentemente, foi lançada pela Agência Espacial Europeia (ESA) e pela Agência Japonesa de Exploração Aerospacial (JAXA) a sonda Bepicolombo, que concluirá o mapeamento da superfície do planeta e fornecerá novos dados e informações.
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