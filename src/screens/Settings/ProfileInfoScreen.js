import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import TopNavBarComponent from '../../components/TopNavBarComponent'
import Appassets from '../../assets/Appassets'

const ProfileInfoScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                padding: 16,
            }}>
                <TopNavBarComponent name={"Personal info"} />

                <View style={{
                    marginTop: 16,
                }}>

                    <View style={{
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                        backgroundColor: "#DEECF1",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        borderWidth: 2,
                        borderColor: "#fff",
                        shadowColor: "#000",
                        shadowOffset: {
                            height: 0,
                            width: 0,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                        elevation: 4,
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#000",
                            fontSize: 35,
                        }}>J</Text>
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: -8,
                                right: 8,
                            }}
                        >
                            <Image source={Appassets.SPIIEdit} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: 64,
                        // backgroundColor:"red",
                        paddingHorizontal: 8,
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 8,
                        }}>
                            <Image source={Appassets.SPIIMobile} />
                            <View style={{
                                flex: 1,
                                marginLeft: 16,
                            }}>
                                <Text style={{
                                    fontWeight: "700",
                                    color: "#000",
                                    fontSize: 14,
                                }}>Mobile number</Text>
                                <Text style={{
                                    marginTop: 4,
                                    fontWeight: "500",
                                    color: "#00000055",
                                    fontSize: 14,
                                }}>+91 7621827682</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{
                                    fontWeight: "bold",
                                    color: "#2571F0",
                                    fontSize: 14,
                                }}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 8,
                        }}>
                            <Image source={Appassets.SPIIMail} />
                            <View style={{
                                flex: 1,
                                marginLeft: 16,
                            }}>
                                <Text style={{
                                    fontWeight: "700",
                                    color: "#000",
                                    fontSize: 14,
                                }}>Email</Text>
                                <Text style={{
                                    marginTop: 4,
                                    fontWeight: "500",
                                    color: "#00000055",
                                    fontSize: 14,
                                }}>riskbyjigo@gmail.com</Text>
                            </View>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 8,
                        }}>
                            <Image source={Appassets.SPIIEarth} />
                            <View style={{
                                flex: 1,
                                marginLeft: 16,
                            }}>
                                <Text style={{
                                    fontWeight: "700",
                                    color: "#000",
                                    fontSize: 14,
                                }}>Language</Text>
                                <Text style={{
                                    marginTop: 4,
                                    fontWeight: "500",
                                    color: "#00000055",
                                    fontSize: 14,
                                }}>English</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{
                                    fontWeight: "bold",
                                    color: "#2571F0",
                                    fontSize: 14,
                                }}>Change</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileInfoScreen

const styles = StyleSheet.create({})