import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Card = (props) => {

    return (
        <View style={cardStyles.container}>
            <Text style={cardStyles.title}>Id y nombre</Text>
            <Text style={cardStyles.docente}>Docente</Text>
            <View style={cardStyles.dateContainer}> 
                <View style={{width: 24, height: 24, borderRadius: 8, borderColor: '#2A2A2A', borderWidth: 1}}/>
                <Text>fecha</Text>
                <View style={{width: 24, height: 24, borderRadius: 8, borderColor: '#2A2A2A', borderWidth: 1}}/>
                <Text>hora</Text>
            </View>
            <View style={cardStyles.averageContainer}>
                <Text>Promedio</Text>
                <Text>X.x</Text>
            </View>
        </View>
    );
}

const cardStyles = StyleSheet.create({
    container: {
        borderRadius: 24,
        paddingHorizontal: 24,
        backgroundColor: '#FFF27D',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 175,
        width: 315,
    },
    title: {
        // marginLeft: 24
    },
    docente: {
        // marginLeft: 24
    },
    dateContainer: {
        flexDirection: 'row',
        // marginLeft: 32,
        paddingHorizontal: 8,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    averageContainer: {
        // marginLeft: 24,
        // paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // backgroundColor: 'blue',
        // borderColor: 'black',
        // borderWidth: 1
    }
});