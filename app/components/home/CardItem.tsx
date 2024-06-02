import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import  Colors from '../../shared/Colors'
import Entypo from '@expo/vector-icons/Entypo';

export default function CardItem(props) {
    const { id } = props
    const data = [
        {id : "mountain", icon : "image" , color : Colors.warning, title : "Trip to US National Park" , position : "Joshua Park, USA", count : 352 , image : "https://img.freepik.com/free-photo/lake-surrounded-by-rocks-sunlight-new-zealand_181624-26894.jpg?t=st=1717331665~exp=1717335265~hmac=7413fb95657f870bb006d1ad639797d0c2a68c93d1628ae4dcca62ba01ca8c7a&w=740"},
        {id : "city", icon : "home"  , color : Colors.info , title : "Trip to US National Park" , position : "Joshua Park, USA", count : 352, image : "https://img.freepik.com/free-photo/inside-view-huge-breaking-wave-sea-mentawai-islands-indonesia_181624-35476.jpg?t=st=1717336595~exp=1717340195~hmac=1d9b72b94c9be825ff4d926639c801d8d63d50be4785828b5d9cd20308ebec0b&w=740"},
        {id : "other" , icon : "map" , color : Colors.secondary , title : "Trip to US National Park" , position : "Joshua Park, USA", count : 352 , image : "https://img.freepik.com/premium-photo/high-angle-view-land_1048944-6480273.jpg?w=740"},
        {id : "beach" , icon : "light-up" , color : Colors.success , title : "Trip to US National Park" , position : "Joshua Park, USA", count : 352 , image : "https://img.freepik.com/premium-photo/reflection-trees-water_1048944-23622334.jpg?w=740"},
    ]

     const  getIconName = (iconName) : string => {
        return "'"+iconName+"'"
    }

  return (
      <>
      {data.map((item, index) => (item.id === id) && (
          <View style={styles.container} >
              <View style={styles.imageWrapper}>
                  <Image
                      style={styles.image}
                      source={{uri : item.image}}
                  />
                  <View style={styles.btns}>
                        <Entypo name={item?.icon} style={[styles.catIcon , {backgroundColor: item.color}]} size={22} />
                        <Entypo name={"tag"} style={styles.tagIcon} size={22} /> 
                    </View>
              </View>
              <View style={styles.desc}>
                  <Text style={styles.title}>
                      { item?.title }
                  </Text>
                  <View style={styles.position}>
                     <Entypo name={"map"} size={24} style={styles.positionIcon}/> 
                      <Text style={styles.positionText}>
                      { item?.title }
                  </Text>
                  </View>
                  <View style={styles.travelers}>
                      <View style={styles.avatars}>
                          <Image style={styles.avatar}
                              source={{
                                uri : "https://img.freepik.com/free-photo/cartoon-girl-with-butterfly-her-head_1340-32033.jpg?t=st=1717339330~exp=1717342930~hmac=6cdd261faeb178cc39e4855bd4db7a4c3521498049841311763b542705ac94fe&w=900"
                            }}
                          />
                          <Image style={styles.avatar}
                              source={{
                                uri : "https://img.freepik.com/premium-photo/woman-with-backpack-her-back-stands-street_1340-30484.jpg?w=740"
                            }}
                          />

                          <Image style={styles.avatar}
                              source={{
                                uri : "https://img.freepik.com/free-photo/woman-red-coat-stands-street-london_1340-26914.jpg?t=st=1717339663~exp=1717343263~hmac=9e3802b1421560714e8b1979fb7b08b56f91e9884859e9b1194bbe8a149848ca&w=740"
                            }}
                          />
                      </View>
                      <View style={styles.counts}>
                          <Text style={styles.count} >+{item.count}</Text>
                          <Text style={styles.countText} >travelers</Text>
                      </View>
                  </View>
              </View>
    </View>
      ))
      }
      
      </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: Colors.light,
        height: 240,
        borderRadius: 16,
        padding: 0,
        width: Dimensions.get("screen").width * 0.55
    },
    imageWrapper: {
        height: 130,
        backgroundColor: Colors.light,
        borderRadius: 16,
    },
    image: {
        height: "100%",
        width: "100%",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    btns: {
         position: "absolute",
        top: 10,
        right: 10,
        left : 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        height: 58
    },
    catIcon: {
        padding: 4,
        borderRadius: 8,
        height: 32,
        color: Colors.light,
        alignSelf: "center",
        marginTop : -20
    },

    tagIcon: {
        padding: 4,
        height: 32,
        borderRadius: 8,
        backgroundColor: Colors.muted+"80",
        color: Colors.light,
        alignSelf: "center",
        marginTop : -20

    },
    
    desc: {
        padding: 8
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 8,
        color : Colors.dark
    },
    position: { 
        flexDirection: "row",
        alignItems : "center",
        marginTop : 5
    },
    positionIcon: {
        fontSize: 12,
        color: Colors.danger,
        paddingRight: 4,
        alignSelf: "center",
        paddingTop : 0
        
    },
    positionText: {
       fontSize: 12,
        fontWeight: "bold",
        marginBottom: 8,
        color: Colors.muted,
        alignSelf: "center",
        paddingTop : 2
    },

    travelers: {
        flexDirection: "row",
        padding: 8,
        width : "100%"
    },
    avatars: {
        flexDirection: "row",
        paddingLeft: 6,
        paddingRight: 6
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginLeft: -10,
        borderColor: Colors.light,
        borderWidth : 2
    },
    counts: {
        flexDirection: "row",
        padding : 4
    },
    count: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 4,
        color : Colors.dark
    },
    countText: {
        color: Colors.muted,
        paddingHorizontal: 2,
    }
})