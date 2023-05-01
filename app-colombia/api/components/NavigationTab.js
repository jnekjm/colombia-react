import React from 'react'
import Ionic  from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Regiones from './Regiones';
import MainPage from './MainPage';

const NavigationTab = () => {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused
                ? 'create'
                : 'create-outline';
                size = focused ? size + 8 : size +5
            } else if (route.name === 'Regiones') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              size = focused ? size + 8 : size +5
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6aa84f',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel:false,
          style:{
            backgroundColor: "#6aa84f",
            heigth:60
          }
        })}
      >
        <Tab.Screen 
        name="Main" 
        component={MainPage}
        options={{
            title: "INFORMACIÓN DE COLOMBIA",
            headerStyle: {
              backgroundColor: "#6aa84f",

            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              flex:1,
              fontWeight: "bold",
              marginLeft:25,
              fontSize: 30,
              alignContent:"center",
              justifyContent:"center"
            },
          }}
         />
        <Tab.Screen 
        name="Regiones" 
        component={Regiones}
        options={{
            title: "REGIONES COLOMBIA",
            headerStyle: {
              backgroundColor: "#6aa84f",

            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              flex:1,
              fontWeight: "bold",
              marginLeft:10,
              fontSize: 30,
              alignContent:"center",
              justifyContent:"center"
            },
          }}
         />
      </Tab.Navigator>

  )
}

export default NavigationTab;