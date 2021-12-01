import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

import { Header, Expandable, Calendar, SessionCard } from "../components/singles";
import { MenuIcon, NotificationIcon } from "../components/icons";
import { SafeAreaView } from "react-native-safe-area-context";

const CalendarScreen = ({ drawerAnimationStyle, navigation }) => {
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
                        <TouchableOpacity onPress={() => navigation.navigate('Test') } >
                            <NotificationIcon size='32' color= 'white'/>
                        </TouchableOpacity>
                    }
                />
                {/* CONTENT */}
                <View style={homeStyles.content}>
                    <ScrollView contentContainerStyle{...{width: '100%'}} showsVerticalScrollIndicator={false}>
                        {/* Calendario */}
                        <View style={{width: '100%', alignItems: 'center'}}>
                            <Calendar size={260} />
                        </View>
                        {/* Esta semana */}
                        <Expandable title="Esta semana" color="white">
                            <SessionCard 
                                id={0}
                                concepto={'Concepto'}
                                date={{day: '08', month: '08', year: '2021'}}
                                startHour={{hour: 13, minutes: 15}}
                                endHour={{hour: 13, minutes: 30}}
                                evaluador="Evaluador"
                                navigation={navigation}
                            />
                        </Expandable>
                        {/* Este mes */}
                        <Expandable title="Este mes" color="white">
                            <SessionCard 
                                id={0}
                                concepto={'Concepto'}
                                date={{day: '08', month: '08', year: '2021'}}
                                startHour={{hour: 13, minutes: 15}}
                                endHour={{hour: 13, minutes: 30}}
                                evaluador="Evaluador"
                                navigation={navigation}
                            />
                            <SessionCard 
                                id={0}
                                concepto={'Concepto'}
                                date={{day: '08', month: '08', year: '2021'}}
                                startHour={{hour: 13, minutes: 15}}
                                endHour={{hour: 13, minutes: 30}}
                                evaluador="Evaluador"
                                navigation={navigation}
                            />
                        </Expandable>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Animated.View>
    );
}

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

export default CalendarScreen;