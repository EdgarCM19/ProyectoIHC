import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { BottomSheet } from "../components/singles";
import HistoryCard from "../components/singles/HistoryCard";
import SessionCard from "../components/singles/SessionCard";
import User from "../components/singles/User";



const Test = ({ drawerAnimationStyle }) => {
    return (
        <View style={styles.mainContainer}>
            <SessionCard 
                concepto="Concepto" 
                date={{day: '02', month: '08', year: '2021'}} 
                startHour={{hour: 12, minutes: 30}}
                endHour={{hour: 12, minutes: 45}}
                evaluador="Evaluador"
            />
            <User nombre='Usuario' rol='rol'/>
            <HistoryCard 
                concepto="Concepto"
                date={{day: '02', month: '04', year: '2021'}}
                score={8.2}
                teacher="Evaluador"
            />
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