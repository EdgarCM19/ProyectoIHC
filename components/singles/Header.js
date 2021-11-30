import React from "react";
import { View, StyleSheet } from "react-native";

const Header = ({left, right}) => {
    return (
        <View style={headerStyles.header}>
            {/* Left */}
            { left }
            {/* Center */}
            <View style={headerStyles.center} />
            {/* Right */}
            { right }
        </View>
    );
}

const headerStyles = StyleSheet.create({
    header: {
        padding: 24,
        // height: 48,
        flexDirection: 'row',
        backgroundColor: '#292929',
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    center: {
        flex: 1,
    }
});

export default Header;