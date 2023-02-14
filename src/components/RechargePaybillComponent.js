import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Appassets from '../assets/Appassets'

const RechargePaybillComponent = () => {
    return (
        <View style={{
            marginTop: 32,
            paddingHorizontal:8,
        }}>
            <Text style={{
                fontWeight:'500',
                color:"#000",
            }}>Recharged and pay bills</Text>
            <View style={{
                marginTop: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity style={styles.box_container_style}>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 32,
                    }}>
                        <Image source={Appassets.NPIMobilePayment} />
                        <Text style={{
                            fontSize: 12,
                            marginLeft: 16,
                        }}>Mobile
                            Recharged</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box_container_style}>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 32,
                    }}>
                        <Image source={Appassets.NPIBillPayment} />
                        <Text style={{
                            fontSize: 12,
                            marginLeft: 16,
                        }}>Bill Payment</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RechargePaybillComponent

const styles = StyleSheet.create({
    box_container_style: {
        width: "45%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            height: 0, width: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 4,
    }
})