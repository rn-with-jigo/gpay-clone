import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Appassets from '../assets/Appassets'

const TranOptionComponent = () => {
    return (
        <View style={{ marginHorizontal: 8, }}>
            <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical:8,
                paddingVertical:8,
                // backgroundColor:"pink",
            }}>
                <Image source={Appassets.IShowHis} style={{

                }} />
                <Text style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#000",
                    paddingLeft: 16,
                }}>Show transaction history</Text>
                <Image source={Appassets.IRightArrow} style={{

                }} />
            </TouchableOpacity>

            <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical:8,
                paddingVertical:8,
                // backgroundColor:"pink",
            }}>
                <Image source={Appassets.ICheckBlance} style={{

                }} />
                <Text style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#000",
                    paddingLeft: 16,
                }}>View account balance</Text>
                <Image source={Appassets.IRightArrow} style={{

                }} />
            </TouchableOpacity>
        </View>
    )
}

export default TranOptionComponent

const styles = StyleSheet.create({})