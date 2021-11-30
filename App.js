import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Arvo_700Bold, Arvo_400Regular } from "@expo-google-fonts/arvo";
import { SourceSansPro_400Regular, SourceSansPro_700Bold } from '@expo-google-fonts/source-sans-pro'

import CustomDrawer from './navigation/CustomDrawer';
// import { SourceSansPro_400Regular, SourceSansPro_700Bold } from '@expo-google-fonts/source-sans-pro';

const Stack = createStackNavigator();

export default function App() {

  let [fontLoaded] = useFonts({
    Arvo_700Bold,
    Arvo_400Regular,
    SourceSansPro_400Regular,
    SourceSansPro_700Bold
  });

  if(!fontLoaded) return null;

  return (
    <NavigationContainer>
      <CustomDrawer />
    </NavigationContainer>
  );
}