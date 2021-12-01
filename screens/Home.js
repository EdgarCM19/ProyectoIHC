import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { Expandable, Average, Header, SeeMore, SessionCard } from '../components/singles';
import { MenuIcon, NotificationIcon } from '../components/icons';

const HomeScreen = ({ drawerAnimationStyle, navigation }) => {
    return (
        <Animated.View style={[homeStyles.container, drawerAnimationStyle]}>
            <SafeAreaView style={homeStyles.saveArea}>
                {/* HEADER */}
                <Header 
                    left={
                        <TouchableOpacity onPress={() => navigation.openDrawer() } >
                            <MenuIcon size='32' color= 'white'/>
                        </TouchableOpacity>
                    }
                    right={
                        <TouchableOpacity onPress={() => navigation.openDrawer() } >
                            <NotificationIcon size='32' color= 'white'/>
                        </TouchableOpacity>
                    }
                />
                {/* CONTENT */}
                <View style={homeStyles.content}>
                    <ScrollView contentContainerStyle{...{width: '100%'}} showsVerticalScrollIndicator={false}>
                        {/* Usuario */}
                        <Text style={homeStyles.bienvenido}>Bienvenida/o</Text>
                        <Text style={homeStyles.usuario}>[usuario]</Text>
                        {/* Promedio */}
                        <Average data={average_data}/>
                        <SeeMore title="Esta semana" navigation={navigation} route="CalendarScreen" />
                        <Expandable title="Proximas sesiones" color="white">
                            <SessionCard 
                                concepto="Proyecto Final IHC"
                                date={{day: '30', month: '11', year: '2021'}}
                                startHour={{hour: 11, minutes: '00'}}
                                endHour={{hour: 13, minutes: '00'}}
                                evaluador="Carmen Ceron Garnica"
                                navigation={navigation}
                            />
                            <SessionCard 
                                concepto="Entrega 4"
                                date={{day: '31', month: '11', year: '2021'}}
                                startHour={{hour: '07', minutes: '15'}}
                                endHour={{hour: '07', minutes: '40'}}
                                evaluador="Carmen Ceron Garnica"
                                navigation={navigation}
                            />
                        </Expandable>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Animated.View>
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
    bienvenido: {
        color: 'white',
        fontSize: 36, 
        fontFamily: "Arvo_700Bold",
        // fontWeight: "bold",
    },
    usuario: {
        color: 'white',
        fontSize: 24, 
        fontFamily: "Arvo_400Regular",
    }
});

export default HomeScreen;