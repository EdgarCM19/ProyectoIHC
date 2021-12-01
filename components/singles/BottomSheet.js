import React, { useState } from "react";

import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";


const springConf = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500
}

const BottomSheet = ({title, children}) => {
    
    const showHeigh = 50;
    const dimentions = useWindowDimensions();
    const top = useSharedValue(dimentions.height - showHeigh);

    
    const gestureHandler = useAnimatedGestureHandler({
        onStart(_, context){
            context.startTop = top.value;
        },
        onActive(event, context) {
            top.value = context.startTop + event.translationY;
        },
        onEnd(){
            if(top.value > dimentions.height / 3 + 300){
                top.value = dimentions.height - showHeigh;
            } else {
                if(top.value > dimentions.height - 100){
                    top.value = dimentions.height / 3;
                }
                top.value = dimentions.height / 3
            }
        }
    });

    const style = useAnimatedStyle(() => {
        return {
            top: withSpring(top.value, springConf),
        }
    })

    return (
        <>
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.view, style, {width: dimentions.width}]}>
                <View style={[styles.open, {width: dimentions.width / 2.5}]}/> 
                <Text style={styles.title}>{title}</Text>
                <View style={[styles.content, {width: dimentions.width}]}>
                    {children}
                </View>
            </Animated.View>
        </PanGestureHandler>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFF27D',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // padding: 20,
        paddingTop: 16,
        paddingHorizontal: 24,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Arvo_700Bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#292929'
    },
    open: {
        height: 4,
        borderRadius: 8,
        backgroundColor: '#636363',
        marginBottom: 8
    },
    content: {
        position: 'relative',
        paddingHorizontal: 24
    }
});

export default BottomSheet;