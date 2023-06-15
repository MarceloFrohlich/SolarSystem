import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import Jupiter from '../../../assets/Jupiter.jpg';
import Marte from '../../../assets/Marte.jpg';
import Mercurio from '../../../assets/Mercurio.jpg';
import Netuno from '../../../assets/Netuno.jpg';
import Saturno from '../../../assets/Saturno.jpg';
import Terra from '../../../assets/Terra.jpg';
import Venus from '../../../assets/Venus.jpg';
import Urano from '../../../assets/Urano.jpg';


export default function Planetas(props) {
    return (
        <ScrollView style={cardPlanetas.container}>
            <View style={cardPlanetas.delimitadorTexto}>
                <Text style={cardPlanetas.titulo}>Clique no planeta abaixo para aprender sobre cada um deles.</Text>
            </View>
            <View style={cardPlanetas.organizador}>
                <View>
                    <Pressable
                        style={cardPlanetas.card}
                        onPress={() => { props.navigation.navigate('Mercurio') }}
                    >
                        <ImageBackground source={Mercurio} style={cardPlanetas.planetas} />
                    </Pressable>
                    <Text style={cardPlanetas.label}>Mercurio</Text>
                </View>

                <View>
                    <Pressable
                        style={cardPlanetas.card}
                        onPress={() => { props.navigation.navigate('Venus') }}
                    >
                        <ImageBackground source={Venus} style={cardPlanetas.planetas} />
                    </Pressable>
                    <Text style={cardPlanetas.label} >Venus</Text>
                </View>

                <View>
                    <Pressable
                        style={cardPlanetas.card}
                        onPress={() => { props.navigation.navigate('Terra') }}
                    >
                        <ImageBackground source={Terra} style={cardPlanetas.planetas} />
                    </Pressable>
                    <Text style={cardPlanetas.label}>Terra</Text>
                </View>

                <View>
                    <Pressable
                        style={cardPlanetas.card}
                        onPress={() => { props.navigation.navigate('Marte') }}
                    >
                        <ImageBackground source={Marte} style={cardPlanetas.planetas} />
                    </Pressable>
                    <Text style={cardPlanetas.label}>Marte</Text>
                </View>

                <View>
                    <Pressable
                        style={cardPlanetas.card}
                        onPress={() => { props.navigation.navigate('Jupiter') }}
                    >
                        <ImageBackground source={Jupiter} style={cardPlanetas.planetas} />
                    </Pressable>
                    <Text style={cardPlanetas.label}>Jupiter</Text>
                </View>

                <View>
                    <Pressable
                        style={cardPlanetas.card}
                        onPress={() => { props.navigation.navigate('Saturno') }}
                    >
                        <ImageBackground source={Saturno} style={cardPlanetas.planetas} />
                    </Pressable>
                    <Text style={cardPlanetas.label}>Saturno</Text>
                </View>

                <View>
                    <Pressable
                        style={cardPlanetas.card}
                        onPress={() => { props.navigation.navigate('Urano') }}
                    >
                        <ImageBackground source={Urano} style={cardPlanetas.planetas} />
                    </Pressable>
                    <Text style={cardPlanetas.label}>Urano</Text>
                </View>

                <View>
                    <Pressable
                        style={cardPlanetas.card}
                        onPress={() => { props.navigation.navigate('Netuno') }}
                    >
                        <ImageBackground source={Netuno} style={cardPlanetas.planetas} />
                    </Pressable>
                    <Text style={cardPlanetas.label}>Netuno</Text>
                </View>

            </View>

        </ScrollView>
    )
}

const cardPlanetas = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    card: {
        height: 120,
        width: 120,
        backgroundColor: 'lightblue',
        marginBottom: 15,
        borderRadius: 80,
        marginHorizontal: 5,
        borderWidth: 1,
    },
    delimitadorTexto: {
        flex: 1,
        borderWidth: 1,
        height: 100,
    },
    organizador: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'space-around',
        borderWidth: 2,
        height: 700,
    },
    planetas: {
        overflow: 'hidden',
        flex: 1,
        borderRadius: 50,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        flex: 1,
        textAlignVertical: 'center'
    },
    label: {
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        borderRadius: 20,
        width: 90,
        paddingVertical: 8,
        alignSelf: 'center',

    }
})