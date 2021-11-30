import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Animated from "react-native-reanimated";
import { Header, Average, Expandable } from '../components/singles';
import { ArrowIcon } from '../components/icons'
import { SafeAreaView } from "react-native-safe-area-context";

const CourseScreen = ({drawerAnimationStyle, route, navigation}) => {
    return (
        <Animated.View style={[courseStyles.container, drawerAnimationStyle]}>
            <SafeAreaView style={courseStyles.saveArea}>
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
                <View style={courseStyles.content}>
                    <ScrollView contentContainerStyle{...{width: '100%'}} showsVerticalScrollIndicator={false}>
                        {/* Course info */}
                        <Text style={courseStyles.courseInfo}>ID-Nombre</Text>
                        {/* Average */}
                        <Average data={average_data}/>
                        <Expandable title="Sesiones" color="white">
                            <View style={{
                                backgroundColor: 'red',
                                height: 80,
                                width: 100,
                                marginVertical: 16
                            }}/>
                            <View style={{
                                backgroundColor: 'red',
                                height: 80,
                                width: 100,
                                marginVertical: 16
                            }}/>
                            <View style={{
                                backgroundColor: 'red',
                                height: 80,
                                width: 100,
                                marginVertical: 16
                            }}/>
                            <View style={{
                                backgroundColor: 'red',
                                height: 80,
                                width: 100,
                                marginVertical: 16
                            }}/>
                        </Expandable>
                        <Expandable title="Historial" color="white">
                            <View style={{
                                backgroundColor: 'red',
                                height: 80,
                                width: 100,
                                marginVertical: 16
                            }}/>
                            <View style={{
                                backgroundColor: 'red',
                                height: 80,
                                width: 100,
                                marginVertical: 16
                            }}/>
                            <View style={{
                                backgroundColor: 'red',
                                height: 80,
                                width: 100,
                                marginVertical: 16
                            }}/>
                            <View style={{
                                backgroundColor: 'red',
                                height: 80,
                                width: 100,
                                marginVertical: 16
                            }}/>
                        </Expandable>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Animated.View>
    );
}

const average_data = [
    { id: 1, materia: 'Concepto 1', calificacion: '0.0' },
    { id: 2, materia: 'Concepto 2', calificacion: '0.0' },
    { id: 3, materia: 'Concepto 3', calificacion: '0.0' },
];

const courseStyles = StyleSheet.create({
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
    courseInfo: {
        fontFamily: 'Arvo_700Bold',
        fontSize: 36,
        color: '#FFF27D',
        textAlign: 'center'
    }
});

export default CourseScreen;