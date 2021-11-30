import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SeeMore = ({title, navigation, route}) => {
    return (
        <View style={seeMoreStyles.container}>
            <Text style={seeMoreStyles.title}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(`${route}`)}>
                <Text style={seeMoreStyles.link}>{`See more >`}</Text>
            </TouchableOpacity>
        </View>
    );
}

const seeMoreStyles = StyleSheet.create({
    container: {
        marginTop: 16,
        height: 24,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "center",
        width: '100%',
    },
    title: {
        fontFamily: 'Arvo_400Regular',
        fontSize: 18,
        color: 'white'
    },
    link: {
        fontFamily: 'Arvo_400Regular',
        fontSize: 12,
        color: '#636363',
        textAlignVertical: "center"
    }
});

export default SeeMore;