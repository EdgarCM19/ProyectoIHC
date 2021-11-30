import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { BottomSheet } from "../components/singles";


const Test = ({ drawerAnimationStyle }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Hola</Text>
            <BottomSheet title='Evidencias'>

            </BottomSheet>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#2A2A2A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 76,
    },
});

export default Test;