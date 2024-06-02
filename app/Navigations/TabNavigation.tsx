import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';
import  Colors from '../shared/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (
      <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel : false
          
      }} >
           <Tab.Screen name="Home" component={Home} 
           options={{
               tabBarLabel: 'Home',
               tabBarStyle: styles.tab,
               tabBarActiveTintColor: Colors.medium,
               tabBarIconStyle : {color : Colors.muted},
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name='home' color={color} size={size} />
                )
            }} 
          />
        <Tab.Screen name="tab1" component={Detail}
            options={{
                tabBarLabel: 'Search',
                tabBarStyle: styles.tab,
               tabBarActiveTintColor: Colors.medium,
               tabBarIconStyle : {color : Colors.muted},
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name='search' color={color} size={size} />
                )
            }} 
          />
           <Tab.Screen name="plus" component={Tab2}
           options={{
               tabBarLabel: 'Tab2',
               tabBarStyle: styles.tab,
               tabBarActiveTintColor: Colors.medium,
               tabBarIconStyle : {color : Colors.muted},
                  tabBarIcon: ({ color, size }) => (
                      <View style={styles.tabAdd}>
                          <Ionicons name='add' color={color} size={32} style={styles.add} />
                      </View>
                )
            }} 
          />

          <Tab.Screen name="tab2" component={Tab2}
           options={{
               tabBarLabel: 'Tab2',
               tabBarStyle: styles.tab,
               tabBarActiveTintColor: Colors.medium,
               tabBarIconStyle : {color : Colors.muted},
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name='pricetag' color={color} size={size} />
                )
            }} 
          />
          <Tab.Screen name="Tab1" component={Tab1} 
           options={{
               tabBarLabel: 'Map',
               tabBarStyle: styles.tab,
               tabBarActiveTintColor: Colors.medium,
               tabBarIconStyle : {color : Colors.muted},
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name='map' color={color} size={size} />
                )
            }} 
                  />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabs: {
        paddingBottom : 20
    },
    tab: {
        paddingBottom: 30,
        paddingTop: 10,
        height: 70
    },
    tabAdd: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding : 10
    },
    add: {
        backgroundColor: Colors.danger,
        color: Colors.light,
        borderRadius: 32,
        marginTop : -40,
        height: 64,
        width: 64,
        paddingTop: 15,
        paddingLeft: 15,
        fontWeight : "bold"
        
    }
})