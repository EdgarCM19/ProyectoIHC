import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Average = ({data}) => {
    // const average = 
    return (
        <View style={averageStyles.container}>
            <View style={averageStyles.rowFlex}>
                <Text style={averageStyles.mainText}>Promedio:</Text>
                <Text style={averageStyles.mainText}>0.0</Text>
            </View>
            {/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={ item => item.id }
            /> */}
            {data.map(item => <AverageItem course={item.materia} average={item.calificacion} key={item.id}/> )}
        </View>
    )
}

const renderItem = ({item}) =>  <AverageItem course={item.materia} average={item.calificacion} />

const AverageItem = ({course, average}) => {
    return (
        <View style={[averageStyles.rowFlex, {paddingLeft: 16}]}>
            <Text style={averageStyles.text}>{course}</Text>
            <Text style={averageStyles.text}>{average}</Text>
        </View>
    )
}

const averageStyles = StyleSheet.create({
    container: {
        marginTop: 16,
        width: '100%'
    },
    text: {
        color: "#636363",
        fontSize: 14,
        fontFamily: 'Arvo_400Regular'
    }, 
    mainText: {
        color: "#FFFFFF",
        fontSize: 24,
        fontFamily: 'Arvo_400Regular',
        letterSpacing: 5,
    }, 
    rowFlex: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center'
    }
});

export default Average;