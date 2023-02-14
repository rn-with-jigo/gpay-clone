import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import NameContainer from '../components/NameContainer'
import Appassets from '../assets/Appassets'
import PeoplesContainer from '../components/PeoplesContainer'
import BBModuleComponent from '../components/BBModuleComponent'
import DivderComponent from '../components/DivderComponent'
import SWModuleComponent from '../components/SWModuleComponent'
import TranOptionComponent from '../components/TranOptionComponent'
import { nvaStrings } from '../utils/navStrings'

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
            <View style={{ flex: 1, paddingTop: 8, }}>
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
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(nvaStrings.UProfileScreen)
                        }}
                    >
                        <NameContainer
                            name={"J"}
                        />
                    </TouchableOpacity>
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
                            padding: 16,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            // backgroundColor:"#00000022",
                            shadowColor: "#fff",
                            shadowOpacity: 1,
                            shadowOffset: {
                                height: 3,
                                width: 0,
                            },
                            shadowRadius: 5,
                            elevation: 3,
                        }}
                    >
                        <View
                            style={{
                                width: "15%",
                                height: 5,
                                backgroundColor: "#00000066",
                                borderRadius: 3,
                                alignSelf: "center",
                            }}
                        />
                        <PeoplesContainer />
                        <DivderComponent />

                        <View style={{
                            marginVertical: 16,
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <Text style={{
                                    fontWeight: "600", color: "#000",
                                    fontSize: 16
                                }}>Businesses and Bills</Text>

                                <TouchableOpacity style={{
                                    padding: 8,
                                    borderRadius: 30,
                                    backgroundColor: "#DADADA",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Image source={Appassets.IconExplore} style={{
                                        height: 15, width: 15,
                                        marginRight: 8,
                                    }} />
                                    <Text style={{
                                        fontWeight: "600", color: "#2571F0",
                                        fontSize: 14
                                    }}>Explore</Text>
                                </TouchableOpacity>
                            </View>
                            <BBModuleComponent />
                        </View>
                        <DivderComponent />

                        <View style={{
                            marginVertical: 16,
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <Text style={{
                                    fontWeight: "600", color: "#000",
                                    fontSize: 16
                                }}>Spend and win</Text>

                            </View>
                            <SWModuleComponent />
                        </View>

                        <View style={{
                            marginVertical: 8,
                        }}>
                            <TranOptionComponent />
                        </View>

                        <View style={{
                            marginVertical: 8,
                            paddingTop: 16,
                            // backgroundColor:"pink"
                        }}>
                            <Text style={{
                                fontWeight: "700",
                                color: "#000",
                                fontSize: 14,
                            }}>Invite your friends to Google Pay</Text>
                            <View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#000",
                                        marginTop: 8,
                                    }}>Copy your code <Text style={{
                                        fontWeight: "bold"
                                    }}>abcd5j</Text></Text>
                                    <TouchableOpacity>
                                        <Image source={Appassets.ICopy} style={{
                                            marginLeft: 4,
                                            height: 15,
                                            width: 15,
                                            transform: [
                                                { translateY: 5 }
                                            ]
                                        }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <ImageBackground source={Appassets.IFooterBanner} style={{
                                width: "100%",
                                height: 120,
                            }}>
                                <TouchableOpacity style={{
                                    width: "20%",
                                    padding: 6,
                                    borderRadius: 30,
                                    borderWidth: 1,
                                    backgroundColor: "transparent",
                                    alignItems: "center",
                                    marginTop: 8,
                                }}>
                                    <Text style={{ fontWeight: "500", color: "#000" }}>Invite</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>

                    </View>
                </ScrollView>
                <TouchableOpacity style={{
                    position: "absolute",
                    bottom: 16,
                    backgroundColor: "#2571F0",
                    borderRadius: 30,
                    flexDirection: "row",
                    alignItems:"center",
                    width:"40%",
                    height:40,
                    justifyContent:"center",
                    alignSelf:"center",
                }}
                    onPress={() => {
                        navigation.navigate(nvaStrings.NewpaymentScreen)
                    }}
                >
                    <Image source={Appassets.SICross} style={{
                        height: 15, width: 15,
                        tintColor:"#fff",
                        marginRight:16,
                        transform:[
                            {rotate:"45deg"}
                        ]
                    }} />
                    <Text style={{
                        fontWeight: "600",
                        color: "#fff",
                    }}>New payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen