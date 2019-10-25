import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button 
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Map from './src/Map'
import PinScreen from './src/PinScreen'

const Navigation = createStackNavigator({
  HomeScreen:{
    screen:Map
  },
  PinScreen:{
    screen:PinScreen
  }
})
export default createAppContainer(Navigation);