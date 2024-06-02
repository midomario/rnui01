import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import  Colors from '../shared/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import FilterItem from '../components/home/FilterItem';
import SelectDrop from '../components/home/SelectDrop';
import CardItem from '../components/home/CardItem';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useNavigation } from '@react-navigation/native';
import Detail from './Detail';

SplashScreen.preventAutoHideAsync();


export default function Home() {
const navigation = useNavigation();

    const [isLoaded] = useFonts({
    Jane : require('../../assets/fonts/JaneRoe-Bold.ttf'), 
  })

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

   if (!isLoaded) {
    return null;
  }

    
 
    

  return (
    <ScrollView style={styles.container} onLayout={handleOnLayout}>
      <View style={styles.top}>
        <View style={styles.header}>
            <Text style={styles.salutation}>Welcome back,</Text>        
            <Text style={styles.name}>Jonathan</Text>        
        </View>
        <View style={styles.searchItem}>
            <Ionicons name="search" size={24} color={Colors.danger} style={styles.searchIcon} />      
            <TextInput style={styles.searchInput} placeholder='Search...'></TextInput>        
            <Ionicons name="filter" size={24} color={Colors.muted}  style={styles.searchFilter} />        
        </View >
        <View style={styles.filters}>
            <FilterItem name={"Beachers"} color={Colors.success} icon={'light-up'}></FilterItem>
            <FilterItem name={"Cities"} color={Colors.info} icon={'home'}></FilterItem>
            <FilterItem name={"Mountains"} color={Colors.warning} icon={'image'}></FilterItem>
            <FilterItem name={"Others"} color={Colors.secondary} icon={'map'}></FilterItem>
        </View>      
        </View>
          {/*END TOP */}
          <View style={styles.content}>
              <View style={styles.contentTop}>
                  <Text style={styles.contentTitle}>
                      Popular trips
                  </Text>
                  <View style={styles.contentSelect}>
                    <Text>🇺🇸</Text>
                    <Text>USA</Text>
                      <Ionicons name="chevron-down-outline" size={18} style={styles.contentSelectIcon} />        
                  </View>
              </View>
              
        </View>
          {/*END CONTENT */}
          <ScrollView horizontal={true}>
              <View style={styles.cards}>
              <TouchableOpacity
                      onPress={ ()=>{}
                        //   () => navigation.navigate('Detail')
                      }>
               <CardItem id={'city'} key={'city'} />
              </TouchableOpacity>
                <CardItem id={'mountain'} key={'mountain'}/>
                <CardItem id={'beach'} key={'beach'} />
                <CardItem id={'other'} key={'other'} />
              </View>
          </ScrollView>
          {/*END CARDS */}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        width : "100%",
        height: "100%",
        backgroundColor : Colors.light
    },
    top: {
        padding: 20,
        marginTop: 10,
    },
    header: {
       padding: 8,
       marginVertical : 16 
    },
    salutation: {
        fontFamily  : "Jane",
        fontSize: 18,
        color: Colors.muted,
        fontWeight : "400"
    },
    name: {
        fontFamily  : "Jane",
        fontSize: 24,
        color : Colors.dark
    },
    searchItem: {
        fontFamily  : "Jane",

        flex: 1,
        flexDirection: "row",
        justifyContent : "space-between",
        alignItems : "center",
        backgroundColor: Colors.lightBackGround,
        height: 52,
        width: "95%",
        alignSelf: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius : 32
    },
    searchIcon: {
        
    },
    searchInput: {
        flex: 1,
        paddingStart : 8 
    },
    searchFilter: {
        
    },

    filters: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
        marginBottom: 10,

    },

    content: {
        backgroundColor: Colors.lightBackGround,
        borderTopStartRadius : 28,
        borderTopEndRadius: 28,
        bottom: 0,
    },
    contentTop: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems : 'center',
        paddingHorizontal: 20,
        marginTop : 10
    },
    contentTitle: {
        fontSize: 16,
        fontWeight: "800",
    },
    contentSelect: {
        backgroundColor: Colors.light,
        padding: 12,
        marginVertical: 8,
        height: 42,
        width: 80,
        borderRadius: 10,
        flexDirection : "row"
    },
    contentSelectIcon: {
        alignSelf : "center"
    },

    cards: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.lightBackGround,
        justifyContent: "space-around",
        alignItems : "center",
        gap: 1,
        paddingVertical : 20
        // gap :2
    }
    
})