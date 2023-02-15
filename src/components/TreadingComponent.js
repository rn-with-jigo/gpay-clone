import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import React from 'react'
import Appassets from '../assets/Appassets'

const TreadingComponent = () => {

    const treadingData = [
        {
            id:"#001",
            heading: "New! Hot IPOs & investment news",
            title:"Learn how buy stocks",
            btnText: "See Spots",
            banner: Appassets.NPBBTreadingInvestNews,
        },
        {
            id:"#002",
            heading: "40% discount on your 1st Redbus ticket",
            title:"Use code ABCDE, now till Mar 1",
            btnText: "Book now",
            banner: Appassets.NPBBTreadingBus,
        },
        {
            id:"#003",
            heading: "Get up to 20% discount on gift cards",
            title:"Now till Mar 31",
            btnText: "Buy Now",
            banner: Appassets.NPBBTreadingGiftCard,
        },
    ]

    return (
        <View style={{
            marginTop: 16,
        }}>
            <Text style={{
                fontSize: 20,
                color: "#000",
                fontWeight: "500",
            }}>Trending</Text>

            <View style={{
                marginVertical: 8,

            }}>
                <ScrollView
                    horizontal
                  
                    showsHorizontalScrollIndicator={false}
                >
                    {treadingData.map((itm,ind) => {
                        return(
                            <View style={styles.trading_container} key={ind}>
                                <ImageBackground source={itm.banner}
                                    style={{
                                        flex:1,
                                    }}
                                    borderRadius={16}
                                >
                                    <View style={{
                                        flex:1,
                                        backgroundColor:"#00000055",
                                        borderRadius:16,
                                        padding:16,
                                        
                                    }}>
                                        <Text style={{
                                            marginTop:4,
                                            fontWeight:"600",
                                            color:"#fff",
                                            fontSize:20,
                                        }}>{itm.heading}</Text>
                                        <Text style={{
                                            marginTop:4,
                                            fontWeight:"600",
                                            color:"#fff",
                                            fontSize:14,
                                        }}>{itm.title}</Text>

                                        <TouchableOpacity
                                            style={styles.btn_contianer}
                                        >
                                            <Text style={{
                                            fontWeight:"600",
                                            color:"#fff",
                                            fontSize:12,
                                        }}>{itm.btnText}</Text>
                                        </TouchableOpacity>
                                    </View>

                                </ImageBackground>
        
                            </View>
                        )
                    })}
                 
                    
                </ScrollView>
            </View>
        </View>
    )
}

export default TreadingComponent

const styles = StyleSheet.create({
    btn_contianer:{
        width:100,
        borderRadius:30,
        height:30,
        marginTop:8,
        borderWidth:1,
        borderColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    trading_container:{
        width: Dimensions.get("screen").width * 0.70,
        height: 150,
        // backgroundColor: "#00000044",
        borderRadius: 16,
        marginHorizontal:4,
        borderWidth:1,
        borderColor:"#00000044",
        // shadowColor:"#000",
        // shadowOffset:{
        //     height:0,width:0,
        // },
        // shadowOpacity:1,
        // shadowRadius:1,
        // elevation:2,
        
    }
})