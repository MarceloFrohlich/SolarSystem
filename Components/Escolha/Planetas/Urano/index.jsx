import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import imgUrano from '../../../../assets/Urano.jpg';

export default function Urano() {
    return (
        <ScrollView style={planetas.container}>

            <Image
                source={imgUrano} style={planetas.principal}>

            </Image>

            <Text style={planetas.texto}>Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano. Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita. William Herschel anunciou sua descoberta em 13 de março de 1781, expandindo as fronteiras do Sistema Solar pela primeira vez na história moderna. Urano foi também o primeiro planeta a ser descoberto por meio de um telescópio.
                {'\n'}{'\n'}
                Urano tem uma composição similar à de Netuno, e ambos possuem uma composição química diferente da dos maiores gigantes gasosos, Júpiter e Saturno. Como tal, os astrônomos algumas vezes os colocam em uma categoria separada, os "gigantes gelados". A atmosfera de Urano, embora similar às de Júpiter e Saturno em sua composição primária de hidrogênio e hélio, contém mais "gelos" tais como água, amônia e metano, assim como traços de hidrocarbonetos. É a mais fria atmosfera planetária no Sistema Solar, com uma temperatura mínima de 49 K (–224 °C). Tem uma complexa estrutura de nuvens em camadas, e acredita-se que a água forma as nuvens mais baixas, e o metano as mais exteriores. Em contraste, seu interior é formado principalmente por gelo e rochas.
                {'\n'}{'\n'}
                Como os outros planetas gigantes, Urano tem um sistema de anéis, uma magnetosfera e vários satélites naturais. O sistema uraniano tem uma configuração única entre os planetas porque seu eixo de rotação é inclinado para o lado, quase no plano de translação do planeta. Portanto, seus polos norte e sul estão quase situados onde seria o equador nos outros planetas. Em 1986, imagens da sonda Voyager 2 mostraram Urano como um planeta virtualmente sem características na luz visível, ao contrário dos outros planetas gigantes que contêm faixas de nuvens e grandes tempestades. Entretanto, observações terrestres têm mostrado sinais de mudanças sazonais e aumento da atividade meteorológica nos últimos anos à medida que Urano se aproximou do equinócio. A velocidade de vento no planeta pode alcançar 250 metros por segundo (900 km/h).

                {'\n'}{'\n'}

                Antes de sua descoberta como planeta, Urano foi observado em muitas ocasiões, geralmente confundido com uma estrela. O registro mais antigo de sua observação é de 1690 quando John Flamsteed o observou pelo menos seis vezes, e o catalogou como 34 Tauri. O astrônomo francês Pierre Lemonnier observou Urano pelo menos doze vezes entre 1750 e 1769, inclusive em quatro noites consecutivas.
                {'\n'}{'\n'}
                Sir William Herschel observou o planeta em 13 de março de 1781 no jardim de sua casa no número 19 da New King Street na cidade de Bath, Somerset (agora o Museu Herschel de Astronomia), mas inicialmente o reportou (em 26 de abril de 1781) como um cometa. Herschel "se engajou em uma série de observações de paralaxe de estrelas fixas", usando um telescópio de sua própria construção. Ele registrou em seu jornal "No quartil próximo a ζ Tauri … tanto uma estrela Nebulosa ou possivelmente um cometa". Em 17 de março, ele anotou, "Olhei para o Cometa ou Estrela Nebulosa e descobri que é um cometa, pela sua mudança de local". Quando apresentou sua descoberta para a Royal Society, ele continuou declarando que tinha encontrado um cometa enquanto implicitamente comparando-o com um planeta

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