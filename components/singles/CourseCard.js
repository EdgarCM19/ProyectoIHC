import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CalendarIcon, ClockIcon } from '../icons'

const CourseCard = ({id, name, teacher, session, average, navigation}) => {



    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('CourseDetailsScreen', 
                { id: id }
            )}
        >
        <View style={cardStyles.container}>
            <Text style={cardStyles.title}>{id} - {name}</Text>
            <Text style={cardStyles.docente}>{teacher}</Text>
            <View style={cardStyles.dateContainer}> 
                {/* <View style={cardStyles.icono}/> */}
                <CalendarIcon size={24} color='#636363'/>
                <Text style={cardStyles.jour}>{session.date.day}/{session.date.month}/{session.date.year}  </Text>
                {/* <View style={cardStyles.icono}/> */}
                <ClockIcon size={24} color='#636363' />
                <Text style={cardStyles.jour}>{session.startHour.hour}:{session.startHour.minutes} - {session.endHour.hour}:{session.endHour.minutes}</Text>
            </View>
            <View style={cardStyles.averageContainer}>
                <Text style={cardStyles.averageText}>Promedio</Text>
                <Text style={cardStyles.averageText}>{average}</Text>
            </View>
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
        height: 175,
        width: 315,
        marginVertical: 16
    },
    title: {
        fontFamily: 'Arvo_700Bold',
        fontSize: 24,
    },
    docente: {
        marginTop: 4,
        fontSize: 18,
        fontFamily: 'SourceSansPro_400Regular'
    },
    dateContainer: {
        flexDirection: 'row',
        // marginLeft: 32,
        paddingHorizontal: 8,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 12
    },
    jour:{
        fontSize: 14,
        paddingHorizontal: 16,
        color: '#636363'
    },
    icono:{
        width: 24,
        height: 24, 
        borderRadius: 8, 
        borderColor: '#2A2A2A', 
        borderWidth: 1
    },
    averageContainer: {
        // marginLeft: 24,
        // paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 14,
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 16
        // backgroundColor: 'blue',
        // borderColor: 'black',
        // borderWidth: 1
    },
    averageText: {
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 16,
        color: '#636363'
    }
});
export default CourseCard;