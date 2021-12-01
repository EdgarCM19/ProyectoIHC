import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CalendarIcon, ClockIcon } from "../icons";

const SessionCard = ({id, concepto, date, startHour, endHour, evaluador, navigation }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('SessionScreen', { id: id })}>
            <View style={cardStyles.container}>
                <Text style={cardStyles.title}>{concepto}</Text>
                <View style={cardStyles.dataContainer}> 
                    <View style={cardStyles.dateContainer}>
                        {/* <View style={cardStyles.icono}/> */}
                        <CalendarIcon size={24} color='#636363'/>
                        <Text style={cardStyles.jour}>{date.day}/{date.month}/{date.year}</Text>  
                    </View>
                    <View style={cardStyles.dateContainer}>
                        {/* <View style={cardStyles.icono}/> */}
                        <ClockIcon size={24} color='#636363' />
                        <Text style={cardStyles.jour}>{startHour.hour}:{startHour.minutes} - {endHour.hour}:{endHour.minutes}</Text>   
                    </View>
                </View>
                    <Text style={cardStyles.docente}>{evaluador}</Text>
            </View>
        </TouchableOpacity>
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

export default SessionCard;