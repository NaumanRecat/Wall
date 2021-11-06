import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Splash';
import Category from '../categories/Category';



const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Category" component={Category}  options={{headerShown:false}} />
      <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}