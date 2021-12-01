import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import Test from '../screens/Test';
import { getIcon } from "../components/icons";
import Animated, { Extrapolate } from "react-native-reanimated";

import HomeScreen from "../screens/Home";
import CoursesListScreen from "../screens/Courses";
import CourseScreen from '../screens/Course';
import CalendarScreen  from '../screens/Calendar';
import SessionScreen  from '../screens/Session';
import LoginScreen from "../screens/Login";


const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon, navigation, route, ...props}) => {

    const MyIcon = getIcon(icon);

    return (
        <TouchableOpacity style={DrawerItemStyles.container}
            onPress={ () => navigation.navigate(`${route}`)}
        >
            <MyIcon size="24" color="#292929" />
            <Text style={DrawerItemStyles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const DrawerItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        marginBottom: 16,
        alignItems: 'center',
        paddingHorizontal: 8,
        // backgroundColor: 'red'
    },
    label: {
        marginLeft: 16,
        fontSize: 18,
        color: '#292929'
    }
});

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView scrollEnabled={ true } contentContainerStyle={{flex: 1}}>
            <View style={styles.customDrawerView} >
                {/* Profile */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 64}}>
                    <View style={{width: 64, height: 64, borderRadius: 8, borderColor: '#2A2A2A', borderWidth: 1}} />
                    <Text style={{fontFamily: "Arvo_700Bold", marginLeft: 16, fontSize: 24}}>Check It!</Text>
                </View>
                {/* Drawer items */}
                <View style={{flex: 1, marginTop: 16}}>
                    <CustomDrawerItem label="Inicio" icon="home" navigation={ props.navigation } route='HomeScreen'/>
                    <CustomDrawerItem label="Materias" icon="course" navigation={ props.navigation } route='CoursesListScreen'/>
                    <CustomDrawerItem label="Sesiones" icon="meet" navigation={ props.navigation} route='CalendarScreen'/>
                </View>
                {/* Logout */}
                <View style={{marginBottom: 16}}>
                    <CustomDrawerItem label="Salir" icon="logout" />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = (props) => {

    let animatedStyle = null;

    return (
        <View style={styles.mainView}>
            <Drawer.Navigator 
                drawerType="slide"
                overlayColor='transparent'
                screenOptions={{
                    drawerType: 'slide',
                    headerShown: false,
                    overlayColor: 'transparent',
                    drawerStyle: styles.drawer,
                }}
                drawerStyle={styles.drawer}
                sceneContainerStyle={
                    {backgroundColor: '#FFF27D'}
                }
                initialRouteName="LoginScreen"
                drawerContent = { props => { 
                    const scale_a = Animated.interpolateNode(props.progress, {
                        inputRange: [0, 1],
                        outputRange: [1, 0.8],
                        extrapolate: Extrapolate.CLAMP
                    });

                    const borderRadius = Animated.interpolateNode(props.progress, {
                        inputRange: [0, 1],
                        outputRange: [0, 24],
                        extrapolate: Extrapolate.CLAMP
                    });

                    const shadowElevation = Animated.interpolateNode(props.progress, {
                        inputRange: [0, 1],
                        outputRange: [0, 20],
                        extrapolate: Extrapolate.CLAMP
                    });
                
                    animatedStyle = {
                        transform: [{
                            scale: scale_a
                        }],
                        borderRadius,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 10, 
                            height: 0,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 13,
                        elevation: shadowElevation
                    };

                    return(
                        <CustomDrawerContent { ...props }/>
                    ) 
                }}           
            >
                {/* Test Screen */}
                <Drawer.Screen name="Test">
                    {props => <Test { ...props } 
                        drawerAnimationStyle={{ ...animatedStyle }}
                    />}
                </Drawer.Screen>
                {/* Login Scrren */}
            <Drawer.Screen name="LoginScreen" options={{swipeEnabled: false}}>
                    {props => <LoginScreen { ...props } 
                        drawerAnimationStyle={{ ...animatedStyle }}
                    />}
                </Drawer.Screen>
                {/* Home Screen */}
                <Drawer.Screen name="HomeScreen">
                    { props => <HomeScreen { ...props } 
                        drawerAnimationStyle={{ ...animatedStyle }}
                    />}
                </Drawer.Screen>
                {/* CoursesList Screen */}
                <Drawer.Screen name="CoursesListScreen">
                    { props => <CoursesListScreen { ...props } 
                        drawerAnimationStyle={{ ...animatedStyle }}
                    />}
                </Drawer.Screen>
                {/* Course Screen */}
                <Drawer.Screen name="CourseDetailsScreen" options={{swipeEnabled: false}}>
                    { props => <CourseScreen { ...props } 
                        drawerAnimationStyle={{ ...animatedStyle }}
                    />}
                </Drawer.Screen>
                {/*  Calendar Screen */}
                <Drawer.Screen name="CalendarScreen">
                    { props => <CalendarScreen { ...props } 
                        drawerAnimationStyle={{ ...animatedStyle }}
                    />}
                </Drawer.Screen>
                {/*  Session Screen */}
                <Drawer.Screen name="SessionScreen" options={{swipeEnabled: false}}>
                    { props => <SessionScreen { ...props } 
                        drawerAnimationStyle={{ ...animatedStyle }}
                    />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#FFF27D'
    },
    drawer: {
        flex: 1,
        width: '65%',
        paddingRight: 20,
        backgroundColor: '#FFF27D'
    },
    customDrawerView: {
        flex: 1,
        paddingHorizontal: 24,
    }
});

export default CustomDrawer;