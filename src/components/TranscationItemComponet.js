import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TranscationItemComponet = ({data = null}) => {
    return (
        <TouchableOpacity style={{
            flexDirection: "row",
            // backgroundColor:"pink",
            alignItems: "center",
            height: 70,
            paddingHorizontal: 8,
            marginVertical: 8,
        }}>
            <View style={{
            }}>
                <View style={{
                    backgroundColor: "#9467CE",
                    height: 40, width: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontWeight: "700",
                        color: "#fff",
                        fontSize: 16,
                    }}>{data?.name.charAt(0).toUpperCase()}</Text>
                </View>

            </View>
            <View style={{
                marginLeft: 8,
                paddingVertical: 4,
                flex: 1,
            }}>
                <Text style={{
                    fontWeight: "600",
                    fontSize: 16,
                    color: "#000",
                    flex: 1,
                    width: "80%",
                }}>{data?.name}</Text>
                <Text style={{
                    fontWeight: "400",
                    fontSize: 13,
                    color: "#000",
                }}>{data?.ttime}</Text>
            </View>
            <View style={{
                flexDirection: "column",
                paddingVertical: 8,
                justifyContent: "space-between",
            }}>
                <Text style={{
                    fontWeight: "600",
                    fontSize: 16,
                    color: "#000",
                    flex: 1,
                }}>₹{data?.amount}</Text>
                <Text style={{
                    fontWeight: "600",
                    fontSize: 16,
                    color: "tomato",
                }}>{data?.isFaild?"Faild":""}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default TranscationItemComponet

const styles = StyleSheet.create({})