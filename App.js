import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useCallback}  from 'react'
import Home from './app/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/Navigations/TabNavigation';



export default function App() {
  
  return (
    <SafeAreaView style={styles.container} >
      {/* <Home></Home> */}
      <NavigationContainer>
          <TabNavigation />
     </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
  },
});
