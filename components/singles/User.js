import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import userImage from '../../assets/img/user.png'

const User = ({nombre, rol}) => {

    return (
        <View style={cardStyles.container}>
            <Image source={userImage} style={{width: 50, height: 50}}/>
            <Text style={cardStyles.rol}>{nombre} - {rol}</Text>
        </View>
    );
}

const cardStyles = StyleSheet.create({
    container: {
        // paddingHorizontal: 48,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        height: 64,
        width: 322,
    },
    rol: {
        // marginLeft: 24
        paddingHorizontal: 16,
        color: 'white',
        fontSize: 18,
        // alignSelf: "center"
        // textAlignVertical: "center"

    },
    imagen:{
        width: 64,
        height: 64, 
        borderRadius: 1000, 
        borderColor: 'white', 
        borderWidth: 1
    }
});
export default User;