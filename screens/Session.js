import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { Expandable, Header, SeeMore, BottomSheet, User } from '../components/singles';
import { ArrowIcon, CalendarIcon, ClockIcon } from '../components/icons';

const SessionScreen = ({ route, drawerAnimationStyle, navigation }) => {
    return (
        <View style={homeStyles.container}>
            <SafeAreaView style={homeStyles.saveArea}>
                {/* HEADER */}
                <Header 
                    left={
                        <TouchableOpacity onPress={() => navigation.goBack() } >
                            <View style={{transform: [{rotateZ: '90deg'}]}}>
                                <ArrowIcon size='32' color= 'white'/>
                            </View>
                        </TouchableOpacity>
                    }
                />
                {/* CONTENT */}
                <View style={homeStyles.content}>
                    <ScrollView contentContainerStyle{...{width: '100%'}} showsVerticalScrollIndicator={false}>
                        {/* Concepto */}
                        <Text style={homeStyles.concepto}>Concepto</Text>
                        {/* Materia */}
                        <Text style={homeStyles.materia}>Materia</Text>
                        {/* date */}
                        <View style={homeStyles.iconContainer}>
                            <CalendarIcon size={24} color='white'/>
                            <Text style={homeStyles.iconText}>dd/mm/yy</Text>
                        </View>
                        {/* hour */}
                        <View style={homeStyles.iconContainer}>
                            <ClockIcon size={24} color='white' />
                            <Text style={homeStyles.iconText}>hh:mm - hh:mm</Text>
                        </View>
                        {/* teacher */}
                        <View style={homeStyles.teamsContainer}>
                            <Text style={homeStyles.evaluador}>Evaluador</Text>
                            <View style={homeStyles.user}>
                                <User  nombre="Nombre" rol="rol"/>
                            </View>
                            <Expandable title="Equipo" color="white">
                                <View style={homeStyles.user}>
                                    <User nombre="Nombre" rol="rol"/>
                                    <User nombre="Nombre" rol="rol"/>
                                    <User nombre="Nombre" rol="rol"/>
                                </View>
                            </Expandable>
                        </View>
                        {/* team */}
                    </ScrollView>
                </View>
                <BottomSheet title="Evidencias">
                    <View style={homeStyles.evidenciaContainer}>
                        <View style={[homeStyles.iconContainer, { justifyContent: 'space-between'}]}>
                            <Text style={[homeStyles.iconText, {color: '#292929'}]}>Evidencia: </Text>
                            <Text style={[homeStyles.iconText, {color: '#636363'}]}>0.0</Text>
                        </View>
                        <View style={[homeStyles.iconContainer, { justifyContent: 'space-between'}]}>
                            <Text style={[homeStyles.iconText, {color: '#292929'}]}>Evidencia: </Text>
                            <Text style={[homeStyles.iconText, {color: '#636363'}]}>0.0</Text>
                        </View>
                        <View style={[homeStyles.iconContainer, { justifyContent: 'space-between'}]}>
                            <Text style={[homeStyles.iconText, {color: '#292929'}]}>Evidencia: </Text>
                            <Text style={[homeStyles.iconText, {color: '#636363'}]}>--</Text>
                        </View>
                        <View style={[homeStyles.iconContainer, { justifyContent: 'space-between'}]}>
                            <Text style={[homeStyles.iconText, {color: '#292929'}]}>Evidencia: </Text>
                            <Text style={[homeStyles.iconText, {color: '#636363'}]}>--</Text>
                        </View>
                        <SeeMore title='Rubrica' color='#292929' navigation={navigation} />
                    </View>
                </BottomSheet>
            </SafeAreaView>
        </View>
    );
}

const average_data = [
    { id: 1, materia: 'Materia 1', calificacion: '0.0' },
    { id: 2, materia: 'Materia 2', calificacion: '0.0' },
    { id: 3, materia: 'Materia 3', calificacion: '0.0' },
];

const homeStyles = StyleSheet.create({
    saveArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#292929',
        alignContent: "center",
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        paddingHorizontal: 48,
        alignItems: 'flex-start',
    },
    concepto: {
        fontFamily: 'Arvo_700Bold',
        fontSize: 36,
        letterSpacing: 5,
        textAlign: 'center',
        color: '#FFF27D'
    },
    materia: {
        marginTop: 8,
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 24,
        color: '#636363',
        textAlign: 'center',
        letterSpacing: 10
    },
    iconContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        marginLeft: 16,
        // marginTop: 16,
        color: 'white',
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 18,
        letterSpacing: 5,
    },
    teamsContainer: {
        marginTop: 24,
        alignItems: 'flex-start',
        width: '100%'
    },
    evaluador: {
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 18, 
        color: '#636363',
        letterSpacing: 3,
        marginBottom: 8
    },
    user: {
        marginLeft: 16
    },
    evidenciaContainer: {
        justifyContent: 'space-between'
    }
    
});

export default SessionScreen;