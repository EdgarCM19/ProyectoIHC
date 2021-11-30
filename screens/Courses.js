import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header, CourseCard } from '../components/singles';
import { MenuIcon, NotificationIcon } from '../components/icons';

import { courses_data } from "../models/course";
import { getSessionById } from "../models/session";

const CoursesListScreen = ({ drawerAnimationStyle, navigation }) => {

    const session = getSessionById(0);
    const renderItem = ({ item }) => <CourseCard 
        id={item.id} 
        name={item.name} 
        teacher={item.teacher} 
        session={session[0]} 
        average={8.5} 
        navigation={navigation}
    />

    return (
        <Animated.View style={[homeStyles.container, drawerAnimationStyle]}>
            <SafeAreaView style={homeStyles.saveArea}>
                {/* HEADER */}
                <Header 
                    left={
                        <TouchableOpacity onPress={() => navigation.openDrawer() } >
                            <MenuIcon size='32' color= 'white'/>
                        </TouchableOpacity>
                    }
                    right={
                        <TouchableOpacity onPress={() => navigation.openDrawer() } >
                            <NotificationIcon size='32' color= 'white'/>
                        </TouchableOpacity>
                    }
                />
                {/* CONTENT */}
                <View style={homeStyles.content}>
                    {/* <ScrollView contentContainerStyle{...{width: '100%'}} showsVerticalScrollIndicator={false}>
                        
                    </ScrollView> */}
                    <FlatList contentContainerStyle={homeStyles.flatlist} showsVerticalScrollIndicator={false}
                        data={courses_data}
                        renderItem={renderItem}
                        keyExtractor={ item => item.id }
                    />
                </View>
            </SafeAreaView>
        </Animated.View>
    )
}


const homeStyles = StyleSheet.create({
    saveArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#292929',
        alignContent: "center",
        justifyContent: 'center',
        width: '100%'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    flatlist: {
        flexGrow: 1,
        alignContent: 'center'
    }
});

export default CoursesListScreen;