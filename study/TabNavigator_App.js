import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
// import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Contato from './src/pages/Contato'

const Tab = createBottomTabNavigator()
const icons = {
  Home:{
    name:'ios-home',
  },
  Sobre:{
    name:'ios-people',
  },
  Contato:{
    name:'ios-call',
  },
}

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const {name} = icons[route.name]
            return <Icon name={name} color={color} size={size}/>
          }
        })}

        tabBarOptions={{
          style:{
            backgroundColor:'black'
          },
          activeTintColor:'red',
          inactiveTintColor:'white'
        }}
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Sobre' component={Sobre}/>
        <Tab.Screen name='Contato' component={Contato}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
