import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import NameContainer from '../components/NameContainer'
import Appassets from '../assets/Appassets'
import PeoplesContainer from '../components/PeoplesContainer'

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
            title: "Home",
            gestureEnabled: false
        })
    }, [])

    return (
        <SafeAreaView
            style={{ flex: 1, }}
        >
            <View style={{ flex: 1, }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 8,
                }}>
                    <View>
                        <Image source={Appassets.QRCode} alt="qrcode" />
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>

                        <Image source={Appassets.GPay} alt="gpay" />
                    </View>
                    <View>
                        <NameContainer
                            name={"J"}
                        />
                    </View>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: 30,
                    }}
                    
                >
                    <Image source={Appassets.GPayBanner} alt="gbanner"
                        style={{
                            width: "100%",
                            resizeMode: "contain"
                        }}
                    />
                    <View
                        style={{
                            padding:16,
                            borderTopLeftRadius :16,
                            borderTopRightRadius :16,
                            // backgroundColor:"#00000022",
                            shadowColor:"#fff",
                            shadowOpacity:1,
                            shadowOffset:{
                                height:3,
                                width:0,
                            },
                            shadowRadius:5,
                            elevation:3,
                        }}
                    >
                       <View
                        style={{
                            width:"15%",
                            height:5,
                            backgroundColor:"#00000066",
                            borderRadius:3,
                            alignSelf:"center",
                        }}
                        />
                        <PeoplesContainer />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen