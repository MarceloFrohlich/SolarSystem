import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import imgVenus from '../../../../assets/Venus.jpg';

export default function Venus() {
    return (
        <ScrollView style={planetas.container}>

            <Image
                source={imgVenus} style={planetas.principal}>

            </Image>

            <Text style={planetas.texto}>Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas. Como Vénus se encontra mais próximo do Sol do que a Terra, ele pode ser visto aproximadamente na mesma direção do Sol (sua maior elongação é de 47,8°). {"\n"}{"\n"}Vênus atinge seu brilho máximo algumas horas antes da alvorada ou depois do ocaso, sendo por isso conhecido como a estrela da manhã (Estrela-d'Alva) ou estrela da tarde (Vésper); também é chamado Estrela do Pastor.

Vénus é considerado um planeta do tipo terrestre ou telúrico, chamado com frequência de planeta irmão da Terra, já que ambos são similares quanto ao tamanho, massa e composição. {"\n"}{"\n"}Vénus é coberto por uma camada opaca de nuvens de ácido sulfúrico altamente reflexivas, impedindo que a sua superfície seja vista do espaço na luz visível. Ele possui a mais densa atmosfera entre todos os planetas terrestres do Sistema Solar, constituída principalmente de dióxido de carbono. Vénus não possui um ciclo do carbono para fixar o carbono em rochas ou outros componentes da superfície, nem parece ter vida orgânica para absorvê-lo como biomassa. {"\n"}{"\n"}Acredita-se que no passado Vénus possuía oceanos como os da Terra, que se evaporaram quando a temperatura se elevou, restando uma paisagem desértica, seca e poeirenta, com muitas pedras em forma de placas. A água provavelmente se dissociou e, devido à inexistência de um campo magnético, o hidrogênio foi arrastado para o espaço interplanetário pelo vento solar.[5] A pressão atmosférica na superfície do planeta é 92 vezes a da Terra.

A superfície venusiana foi objeto de especulação até que alguns dos seus segredos foram revelados pela ciência planetária no século XX. {"\n"}{"\n"}Ele foi finalmente mapeado em detalhes pelo Programa Magellan de 1990 a 1994. O solo apresenta evidências de extenso vulcanismo e o enxofre na atmosfera pode indicar que houve algumas erupções recentes. Entretanto, a falta de evidência de fluxo de lava acompanhando algumas das caldeiras visíveis permanece um enigma. O planeta possui poucas crateras de impacto, demonstrando que a superfície é relativamente jovem, com idade de aproximadamente 300-600 milhões de anos. Não há evidência de placas tectônicas, possivelmente porque a crosta é muito forte para ser reduzida, sem água para torná-la menos viscosa. Em vez disso, Vénus pode perder seu calor interno em eventos periódicos de reposição da superfície.
                {"\n"}{"\n"}
                
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