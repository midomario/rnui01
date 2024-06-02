import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import  Colors from '../../shared/Colors'

export default function ItineraryCard() {
  return (
      <View style={styles.card}>
          <Image style={styles.cardImage} source={{
              uri : "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?t=st=1717349534~exp=1717353134~hmac=e41da1515d4f70b4ece2f9c9bffeecc1b45b450ea2365aa3358a1e52937e9af7&w=740"
          }} />

          <View style={styles.cardDesc}>
            <Text style={styles.cardTitle}>
                Day 1
            </Text>
            <Text style={styles.cardInfos}>
                25 KM - 5 places
            </Text>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        marginRight: 20,
        marginBottom : 10,
        flex: 1,
        flexDirection : "row",
        // backgroundColor : Colors.light,
        borderColor : Colors.muted,
        borderWidth: 0.2,
        borderRadius: 12,
        width : 240
    },
    cardImage: {
        height: 68,
        width: 68,
        borderRadius: 12,
        margin : 10
    },
    cardTitle: {
        color: Colors.dark,
        fontWeight : "700"
    },
    cardDesc: {
        justifyContent  : "space-evenly",
    },
    cardInfos: {
        color : Colors.muted,
    }
})