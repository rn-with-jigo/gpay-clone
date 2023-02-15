import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SubHeadingComponent from './SubHeadingComponent'

const ShoppingComponent = ({ data = null }) => {
    return (
        <View style={{
            marginVertical: 8,
        }}>
            <SubHeadingComponent title={"Shopping"} />
            <View style={{
                marginVertical: 8,

            }}>
                <ScrollView
                    horizontal
                    bounces
                    showsHorizontalScrollIndicator={false}
                >
                    {data?.map((itm, ind) => {
                        return (
                            <View style={styles.trading_container} key={ind}>
                                <ImageBackground
                                    source={itm.banner}
                                    style={{
                                        flex: 1,
                                    }}
                                    borderRadius={16}
                                >
                                    <View style={{
                                        flex: 1,
                                        backgroundColor: "#00000055",
                                        borderRadius: 16,
                                        padding: 16,
                                    }}>
                                        <Text style={{
                                            marginTop: 16,
                                            fontWeight: "600",
                                            color: "#fff",
                                            fontSize: 20,
                                        }}>{itm?.heading}</Text>
                                        <Text style={{
                                            marginTop: 4,
                                            fontWeight: "600",
                                            color: "#fff",
                                            fontSize: 14,
                                            flex:1,
                                        }}>{itm?.title }</Text>

                                        <TouchableOpacity
                                            style={styles.btn_contianer}
                                        >
                                            <Text style={{
                                                fontWeight: "600",
                                                color: "#fff",
                                                fontSize: 12,
                                            }}>{itm?.btntext}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default ShoppingComponent

const styles = StyleSheet.create({
    btn_contianer: {
        width: 100,
        borderRadius: 30,
        height: 30,
        marginTop: 32,
        borderWidth: 1,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    trading_container: {
        width: Dimensions.get("screen").width * 0.85,
        height: 180,
        backgroundColor: "#00000044",
        borderRadius: 16,
        marginHorizontal: 4,
    },
})