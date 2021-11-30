import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { Header } from '../components/singles';
import { MenuIcon, NotificatonIcon } from '../components/icons';

const MainLayout = () => {
    return (
        <Animated.View>
            <Header 
                left={ <MenuIcon size={32} color='white' /> }
                right={ <NotificatonIcon size={32} color='white' />}
            />
        </Animated.View>
    );
}

const homeStyles = StyleSheet.create({

});

export default MainLayout;