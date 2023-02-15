import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Appassets from '../assets/Appassets'

const SubHeadingComponent = ({title = null}) => {
  return (
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    }}>
        <Text style={{
            fontSize: 20,
            color: "#000",
            fontWeight: "500",
        }}>{title || "Undefined"}</Text>
        <View style={{
            padding:8,
            backgroundColor:"#00000022",
            borderRadius:20,
        }}>
            <Image source={Appassets.IRightArrow} />
        </View>
    </View>
  )
}

export default SubHeadingComponent

const styles = StyleSheet.create({})