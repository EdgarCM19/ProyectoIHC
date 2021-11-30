import React, { useState, useRef } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Animated, { Easing, useAnimatedStyle } from 'react-native-reanimated';
import { ArrowIcon } from '../icons';

const Acordion = ({ title, color, children }) => {
    const [isOpen, setOpen] = useState(false);
    const [bodySectionHeight, setBodySectionHeight] = useState();
    const animatedController = useRef(new Animated.Value(0)).current;


    const bodyHeight = Animated.interpolateNode(animatedController, {
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight],
    });

    const arrowAngle = Animated.interpolateNode(animatedController, {
        inputRange: [0, 1],
        outputRange: [0, `${Math.PI}rad`],
    });

    // const animatedArrow = useAnimatedStyle(() => {
    //     return { transform: [{rotateZ: arrowAngle}]}
    // })

    const toggleAcordion = () => {
        if(isOpen){
            console.log('Close');
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                easing: Easing.bezier(0,4, 0,0, 0,2, 1),
            }).start();
        } else {
            console.log('Open');
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                easing: Easing.bezier(0,4, 0,0, 0,2, 1),
            }).start();
        }
        setOpen(!isOpen);
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => toggleAcordion() }>
                <View style={acordionStyles.titleContainer}>
                    <Text style={[acordionStyles.text, {color: color}]}>{title}</Text>
                    <Animated.View style={{ transform: [{rotateZ: arrowAngle}]}}>
                        <ArrowIcon size="24" color={color}/>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
            <Animated.View style={{ height: bodyHeight, display: isOpen ? 'flex' : 'none'}}>
                <View style={acordionStyles.bodyContainer} 
                    onLayout={e => setBodySectionHeight(e.nativeEvent.layout.height)}>
                    {children}
                </View>
            </Animated.View>
        </View>
    );

}

const acordionStyles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginTop: 16
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Arvo_400Regular',
        fontSize: 18,
    },
    bodyContainer: {
        position: 'absolute',
        bottom: 0
    }
});

export default Acordion;