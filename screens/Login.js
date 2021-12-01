import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogoBold } from "../components/icons";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={loginStyles.container}>
            <SafeAreaView style={loginStyles.saveArea}>
                {/* Logo */}
                <View style={loginStyles.logo}>
                    <LogoBold size={260} />
                </View>
                <View style={loginStyles.formContainer}>
                    {/* Form */}
                    <View >
                        <TextInput style={loginStyles.formInput} placeholder='Correo' placeholderTextColor='#636363'/>
                        <TextInput style={loginStyles.formInput} placeholder='Contraseña' placeholderTextColor='#636363'/>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                            <View style={loginStyles.loginButton}>
                                <Text style={loginStyles.loginButtonText}>Ingresar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Contrasena */}
                    <View style={{marginBottom: 24}}>
                        <View style={loginStyles.delimitador}/> 
                        <Text style={loginStyles.password}>¿Olvisaste tu contraseña?</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const loginStyles = StyleSheet.create({
    container: {
        backgroundColor: '#292929',
        flex: 1,
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },
    saveArea: {
        flex: 1,
        alignContent: 'center',
    },
    logo: {
        marginVertical: 64
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    formInput: {
        paddingVertical: 8,
        marginBottom: 16,
        paddingHorizontal: 16,
        color: '#FFFFFF',
        borderColor: '#636363',
        borderRadius: 8,
        borderWidth: 2,
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 18
    },
    loginButton: {
        marginTop: 32,
        borderRadius: 8,
        backgroundColor: '#FFF27D',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: "center"
    },
    loginButtonText: {
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 18,
        color: '#292929'
    },
    delimitador: {
        borderBottomColor: '#FFF27D',
        borderBottomWidth: 2,
        height: 3
    },
    password: {
        marginTop: 16,
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 14,
        color: '#636363',
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
});

export default LoginScreen;