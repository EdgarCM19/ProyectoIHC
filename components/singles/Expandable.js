import React, { Children, useState } from "react";
import { View, Text, StyleSheet, LayoutAnimation } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { ArrowIcon } from "../icons";

import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
    <Transition.Together>
        <Transition.In type='fade' durationMs={200}/>
        <Transition.Change />
        <Transition.Out type='fade' durationMs={100} />
    </Transition.Together>
)

const Expandable = ({ title, color, active, children }) => {
    const [layoutHeight, setLayoutHeigh] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const ref = React.useRef();
    const activeC = active !== undefined ? active : color; 

    return (
        <Transitioning.View
            ref={ref}
            transition={transition}
            style={expandableStyles.wrapper}
        >
            <TouchableOpacity onPress={() => { 
                setOpen(!isOpen);
                ref.current.animateNextTransition();
            }}>
                <View style={expandableStyles.titleContainer}>
                    <Text style={[expandableStyles.text, {color: isOpen ? activeC : color}]}>{title}</Text>
                    <View style={{transform: [{rotateZ: isOpen ? `${Math.PI}rad` : '0rad' }]}}><ArrowIcon size='24' color={isOpen ? activeC : color} /></View>
                </View>
            </TouchableOpacity>
            { isOpen && (
                <View>
                    { children }
                </View>
            )}
        </Transitioning.View>
    );
}

const expandableStyles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginVertical: 16
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

export default Expandable;