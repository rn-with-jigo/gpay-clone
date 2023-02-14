import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Appassets from '../../assets/Appassets'
import { nvaStrings } from '../../utils/navStrings'

const UProfileScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView
            style={{ flex: 1, }}
        >
            <View style={{ flex: 1, }}>

                <View style={{ height: 200 }}>
                    <ImageBackground source={Appassets.PProfileBanner} style={{
                        width: "100%",
                        flex: 1,
                    }}>
                        <View style={{
                            padding: 16,
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                >
                                    <Image source={Appassets.PILeftArrow} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={Appassets.PIMenu} />
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                flexDirection: "row",
                                marginTop: 16,
                            }}>
                                <View style={{
                                    flex: 1,
                                    transform: [
                                        { translateX: 10, }
                                    ]
                                }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: "#000"
                                    }}>Jeegar Goyani</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#000",
                                        marginTop: 8,
                                    }}>+91 7621827682</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: "#000"
                                    }}>riskbyjigo@gmail.com</Text>
                                </View>

                                <View
                                    style={{
                                        height: 80, width: 80,
                                        borderRadius: 40,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#DEECF1",
                                        transform: [
                                            { translateX: -10 },
                                            { translateY: 10 },
                                        ]
                                    }}
                                >
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 30,
                                        color: "#000",
                                    }}>J</Text>
                                    <Image source={Appassets.PISun} style={{
                                        position: "absolute",
                                        bottom: 0, right: 8,
                                    }} />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 7,
                                }}
                            >
                                <Image source={Appassets.PIRewards} style={{
                                    height: 40,
                                    width: 40,
                                }} />
                                <Text style={{
                                    fontWeight: "bold",
                                    fontSize: 16,
                                    color: "#000",
                                    marginLeft: 16,
                                }}>₹ 182</Text>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#000",
                                    marginLeft: 16,
                                }}>Rewards Earned</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{
                    height: 140,
                    width: "92%",
                    alignSelf: "center",
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    shadowColor: "#000",
                    shadowOffset: {
                        height: 0,
                        width: 0,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    elevation: 3,
                    transform: [
                        { translateY: -10, }
                    ],
                    padding: 8,
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 4,
                    }}>
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 14,
                            color: "#000",
                        }}>Set up payment methods 1/2</Text>
                        <TouchableOpacity>
                            <Image source={Appassets.PIRightArrow} style={{
                                height: 17,
                                width: 17,
                            }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 1,
                        // backgroundColor: "#00000022",
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Image source={Appassets.ICheckBlance} />
                            <Text style={{
                                marginTop: 8,
                                fontWeight: "700",
                                color: "#000",
                            }}>Bank account</Text>
                            <Text style={{
                                color: "#00000033",
                            }}>1 account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Image source={Appassets.PIAddCard} />
                            <Text style={{
                                marginTop: 8,
                                fontWeight: "700",
                                color: "#000",
                            }}>Pay bussinesses</Text>
                            <Text style={{
                                color: "#00000033",
                            }}>Debit/credit card</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{
                    marginTop: 24,
                    paddingHorizontal: 16,
                    // backgroundColor:"pink",
                    marginHorizontal: 8,
                }}>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8,
                    }}>
                        <Image source={Appassets.PIGifft}
                            style={{ height: 30, width: 30 }}
                        />
                        <View style={{
                            flex: 1,
                            marginLeft: 16,
                        }}>
                            <Text style={{
                                fontWeight: "700",
                                color: "#000",
                                fontSize: 14
                            }}>Invite friends, get rewards</Text>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    marginTop: 4,
                                    color: "#000",
                                }}>Share this code <Text style={{
                                    fontWeight: "bold"
                                }}>abcd5j</Text></Text>
                                <TouchableOpacity>
                                    <Image source={Appassets.ICopy} style={{
                                        marginLeft: 4,
                                        height: 13,
                                        width: 13,
                                        transform: [
                                            { translateY: 5 }
                                        ]
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text style={{
                                fontWeight: "500",
                                fontSize: 18,
                                color: "#2571F0"
                            }}>Share</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: "10%",
                    }}
                        onPress={() => {
                            navigation.navigate(nvaStrings.SettingScreen)
                        }}
                    >
                        <Image source={Appassets.PISetting}
                            style={{ height: 25, width: 25 }}
                        />
                        <Text style={{
                            fontWeight: "500",
                            color: "#000",
                            fontSize: 18,
                            marginLeft: 16,
                        }}>Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                        onPress={() => {
                            navigation.navigate(nvaStrings.HelpFeedScreen)
                        }}
                    >
                        <Image source={Appassets.PIQuestion}
                            style={{ height: 25, width: 25 }}
                        />
                        <Text style={{
                            fontWeight: "500",
                            color: "#000",
                            fontSize: 18,
                            marginLeft: 16,
                        }}>Help and feedback</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </SafeAreaView>
    )
}

export default UProfileScreen

const styles = StyleSheet.create({})