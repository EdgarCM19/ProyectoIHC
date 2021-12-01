import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CalendarIcon, ClockIcon, ScoreIcon } from "../icons";

const HistoryCard = ({ concepto, date, score, teacher }) => {

    return (
        <View style={cardStyles.container}>
            <Text style={cardStyles.title}>{concepto}</Text>
            <View style={cardStyles.dataContainer}> 
                <View style={cardStyles.dateContainer}>
                    <CalendarIcon size={24} color='#636363'/>
                    <Text style={cardStyles.jour}>{date.day}/{date.month}/{date.year}</Text>  
                </View>
                <View style={cardStyles.dateContainer}>
                    <ScoreIcon size={24} color="#292929"/>
                    <Text style={cardStyles.jour}>Calificacion:{score}</Text>   
                </View>
            </View>
                <Text style={cardStyles.docente}>{teacher}</Text>
        </View>
    );
}

const cardStyles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 24,
        backgroundColor: '#FFF27D',
        // justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 176,
        width: 299,
        marginVertical: 8,
    },
    title: {
        // marginLeft: 24
        // fontWeight: 'bold',
        fontFamily: 'Arvo_700Bold',
        fontSize: 24,
    },
    dataContainer: {
        // marginLeft: 32,
        paddingHorizontal: 8,
        // justifyContent: 'space-evenly',
        // alignItems: 'flex-start',
        height: 60,
    },
    dateContainer: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',  
    },
    jour:{
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 18,
        paddingHorizontal: 24,
        color: '#636363'
    },
    docente: {
        // marginLeft: 24
        marginTop: 16,
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 16,
        letterSpacing: 5,
        color: '#636363'
    }
});

export default HistoryCard;