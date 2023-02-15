import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TopNavBarComponent from '../components/TopNavBarComponent'
import Appassets from '../assets/Appassets'

const CheckBalanceScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const bankData = [
        {
            id: "#001",
            name: "State Bank of India 4556",
            img: Appassets.CBBISbi,
        },
        {
            id: "#002",
            name: "Axis Bank 5691",
            img: Appassets.CBBIAxis,
        },
    ]

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                padding: 16
            }}>
                <TopNavBarComponent isVisable={false} />

                <View style={{
                    flex: 1,
                    marginTop: 8,
                    padding: 8,
                }}>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 24,
                        color: "#000",
                    }}>Select account</Text>
                    <View style={{
                        marginTop: 16,
                    }}>

                        {bankData.map((itm, ind) => {
                            return (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical:8,
                                    }}
                                    key={ind}
                                >
                                    <View style={{
                                        padding: 4,
                                        paddingHorizontal: 16,
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        borderColor: "#00000033"
                                    }}>
                                        <Image source={itm.img} style={{
                                            height: 40,
                                            width: 40,
                                        }} />
                                    </View>
                                    <Text style={{
                                        fontWeight: "500",
                                        color: "#000",
                                        fontSize: 16,
                                        marginLeft: 16,
                                    }}>{itm.name}</Text>
                                </View>
                            )
                        })}



                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CheckBalanceScreen

const styles = StyleSheet.create({})