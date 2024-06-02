import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import  Colors from '../../shared/Colors'
import Entypo from '@expo/vector-icons/Entypo';

export default function FilterItem(props) {
    const {name , color : any , icon } = props
  return (
      <View style={styles.item}>
          <View style={[styles.iconWrapper , {backgroundColor : props?.color} ]}>
              <Entypo name={icon} size={24}   style={styles.icon} /> 
        </View>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        alignItems : 'center'        
    },
    iconWrapper: {
        backgroundColor: Colors.success,
        padding: 14,
        alignSelf: "center",
        margin: 10,
        borderRadius : 16
        
    },
    icon: {
        color : Colors.light
    },
    title: {
        color: Colors.medium,
        fontWeight: "500",
        fontSize: 14,
        textTransform: 'capitalize',
        marginTop: 4
    }
})