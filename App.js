import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import axios from 'axios';

import Anasayfa from './screen/Anasayfa';
import TodoList from './screen/TodoList';
import HavaDurumu from './screen/HavaDurumu';

import { createStackNavigator } from '@react-navigation/stack';

export default function App() { 
  const Stack = createStackNavigator();
    return ( 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Anasayfa' component={Anasayfa} />
          <Stack.Screen name='TodoList' component={TodoList} />
          <Stack.Screen name='HavaDurumu' component={HavaDurumu} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } 