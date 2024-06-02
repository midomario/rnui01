import { ScrollView, StyleSheet, Text, View , Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors  from '../shared/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ItineraryCard from '../components/detail/ItineraryCard';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

export default function Detail() {

const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.topImage} source={{
          uri : "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?t=st=1717344116~exp=1717347716~hmac=ec002ef989b65baaac91e6be4b761626dba893f1d86846d9c927b2f4ffe50084&w=740"
        }} />
        <TouchableOpacity style={styles.topBackIcon} onPress={() => {
          navigation.goBack()
        }}>
         <Ionicons name='arrow-back' size={24}  />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.contentTopTitle}>Trip to US National Park</Text>
          <View style={styles.contentTopTitles}>
            <View style={styles.position}>
              <FontAwesome5 name='map-marker-alt' size={22} style={styles.positionIcon } />
              <Text style={styles.positionTitle}>Joshua Tree Park, USA</Text>
            </View>
            <FontAwesome5 name='tag' size={24} style={styles.tagIcon } />
          </View>
        </View>

        <View style={styles.authorSection}>
          <Image style={styles.authorAvatar}
          source={{
          uri : "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?t=st=1717344116~exp=1717347716~hmac=ec002ef989b65baaac91e6be4b761626dba893f1d86846d9c927b2f4ffe50084&w=740"
            }}
          />
          <View style={styles.authorDesc}>
            <Text style={styles.authorPoste}>Author</Text>
            <Text style={styles.authorName}>Jessica Windson</Text>
          </View>
          <TouchableOpacity style={styles.follow}>
            <Text style={styles.followBtn}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.text}>
            <Text  style={styles.textTitle}>About Trip</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit elit. Recusandae, repellendus! Blanditiis quisquam labore maiores necessitatibus illo veritatnima, libero dolore!
              <Text style={styles.paragraphMore}>...View more</Text>
          </Text>
        </View>

         <View style={styles.itinerary}>
           <Text  style={styles.itineraryTitle}>Itinerary</Text>
          <ScrollView style={styles.itineraries} horizontal={true}>
            <ItineraryCard key={1}/>
            <ItineraryCard key={2}/>
            <ItineraryCard key={3}/>
          </ScrollView>
        </View>
          
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: Colors.light
  },
  top: {
    height: 300,
    width: "100%",
    backgroundColor: Colors.medium
  },
  topImage: {
    height: 320
  },
  topBackIcon: {
    position: "absolute",
    top: 50,
    left: 20,
    color : Colors.medium,
    backgroundColor: Colors.light,
    padding: 4,
    borderRadius : 20
  },
  content: {
    backgroundColor: Colors.light,
    minHeight: 400,
    height: "auto",
    marginTop: -40,
    borderTopEndRadius : 28,
    borderTopStartRadius: 28,
    padding : 24
  },
  contentTop: {
    marginVertical : 10
  },
  contentTopTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom : 4
  },
  contentTopTitles: {
    flexDirection: "row",
    justifyContent : "space-between"
  },
  
  positionTitle: {
    color: Colors.muted,
    paddingHorizontal : 4
  },
  position: {
    flexDirection: "row",
    marginTop : 8
    
  },
  positionIcon: {
    color: Colors.danger,
  },
  tagIcon: {
    marginTop: -20,
    backgroundColor: Colors.light,
    borderWidth: 1,
    borderColor: Colors.lightBackGround,
    padding: 4,
    borderRadius: 4,
    color : Colors.muted
  },
  authorSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical : 20
  },
  authorAvatar: {
    width: 52,
    height: 52,
    borderRadius: 12,
    alignSelf : "center"
    
  },
  authorDesc: {
    flex: 2,
    paddingStart: 10,
    alignSelf : "center"
  },
  authorPoste: {
    color: Colors.muted,
    fontSize : 14
  },
  authorName: {
    color: Colors.dark,
    fontWeight: "bold",
    fontSize : 15
  },
  follow: {
    alignSelf: "center",
    backgroundColor: Colors.danger,
    paddingVertical: 14,
    width: 120,
    borderRadius : 12
  },
  followBtn: {
    color: Colors.light,
    alignSelf: "center",
    fontWeight: "800",
    fontSize : 16
  },
  text: {
    marginVertical : 15
  },
  textTitle: {
    color: Colors.dark,
    fontWeight: "800",
    fontSize: 18,
    marginBottom : 15
  },
  paragraph: {
    color: Colors.muted,
    fontSize: 15,
    lineHeight: 26
  },
 
  paragraphMore: {
    color: Colors.danger,
    fontSize: 14,
    fontWeight: "600",
  },
  itinerary: {
    
  },
  itineraryTitle: {
    color: Colors.dark,
    fontWeight: "800",
    fontSize: 18,
    marginBottom : 15
    
  },
  itineraries: {
  },
  
})