import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function QucikBookingTabs({ data = null }) {
    return (
        <View style={{
            marginVertical: 16,
        }}>

            <View style={styles.booking_container} >
                {data != null ?
                    <View style={{
                        paddingHorizontal: 16,
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <View style={[{

                            padding: 8,
                            borderRadius: 30,

                        }, data?.backg ? { backgroundColor: "#9467CE", } : null]}>
                            <Image source={data.iimg} />

                        </View>
                        <View style={{
                            flex: 1,
                            marginLeft: 16
                        }}>
                            <Text style={{
                                fontWeight: "700",
                                color: "#000",
                            }}>{data?.heading}</Text>
                            <Text style={{
                                marginTop: 4,
                                fontWeight: "500",
                                color: "#00000055",
                            }}>{data?.title}</Text>
                        </View>
                        <TouchableOpacity style={{

                        }}>
                            <Text style={{
                                fontWeight: "700",
                                color: "#2571F0",
                                transform: [
                                    { translateY: -12 }
                                ]
                            }}>{data?.btnText}</Text>
                        </TouchableOpacity>
                    </View>
                    : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    booking_container: {
        height: 70,
        flex: 1,
        backgroundColor: "#E5E5E5",
        borderWidth: 1,
        borderColor: "#DADADA",
        borderRadius: 8,
        marginHorizontal: 4,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowRadius: 2,
        elevation: 2,
    }
})