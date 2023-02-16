import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Appassets from '../assets/Appassets'
import { IconButton } from 'native-base'

const PeopleShowComponent = ({ type = null, ele = null }) => {
    return (
        <TouchableOpacity style={{
            padding: 8,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "25%",
            // backgroundColor:"pink",
        }}
            onPress={ele?.onPress ? ele?.onPress : null}
        >
            {type == "none" && type != null ?
                <>
                    <View style={{
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                        backgroundColor: "#00000022",
                        alignItems: "center", justifyContent: "center",
                    }}>
                        <Image source={Appassets.IDown} style={{

                            tintColor: "#000000"
                        }} />
                    </View>
                    <Text>See More</Text>
                </>
                :
                <>
                    <Image source={ele ? ele?.img : Appassets.GIcon} style={{
                        height: 60,
                        width: 60,

                    }} />
                    <Text>{ele ? ele?.name : "Name"}</Text>
                </>
            }
        </TouchableOpacity>
    )
}

export default PeopleShowComponent

const styles = StyleSheet.create({})