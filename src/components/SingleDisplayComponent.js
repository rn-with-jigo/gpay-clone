import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SubHeadingComponent from './SubHeadingComponent'

const FoodComponent = ({ data = null }) => {
    // console.log(data);
    return (
        <View style={{
            marginTop: 16,
        }}>
            <SubHeadingComponent title={data?.comheading} />

            <View style={{
                marginVertical: 16,
            }}>
                <View style={{
                    height: 200,
                    width: Dimensions.get("screen").width * 0.9,
                    backgroundColor: "#00000033",
                    borderRadius: 16,
                    alignSelf: "center",
                }}>
                    {data != null ?
                        <ImageBackground
                            source={data?.img}
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
                                }}>{data?.heading}</Text>
                                <Text style={{
                                    marginTop: 4,
                                    fontWeight: "600",
                                    color: "#fff",
                                    fontSize: 14,
                                }}>{data?.title}</Text>

                                <TouchableOpacity
                                    style={styles.btn_contianer}
                                >
                                    <Text style={{
                                        fontWeight: "600",
                                        color: "#fff",
                                        fontSize: 12,
                                    }}>{data?.btntext}</Text>
                                </TouchableOpacity>
                            </View>
                            {data?.isIcon ?
                                <Image
                                    source={data?.iconImg}
                                    style={{
                                        position:"absolute",
                                        height:25,
                                        width:25,
                                        borderRadius:18,
                                        top:6,left:8,
                                    }}
                                />
                                : null}
                        </ImageBackground>
                        : null}
                </View>
            </View>
        </View>
    )
}

export default FoodComponent

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
})