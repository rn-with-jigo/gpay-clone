import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Appassets from '../assets/Appassets'

const TransferMoneyComponent = () => {
    return (
        <View style={{
            marginTop: 32,
            paddingHorizontal: 8,
        }}>
            <Text style={{
                fontWeight: '500',
                color: "#000",
            }}>Transfer Money</Text>

            <View style={{
                marginTop: 16,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}>
                <TouchableOpacity style={styles.main_box_container}>
                    <View
                        style={styles.box_container_style}
                    >
                        <Image source={Appassets.ICheckBlance} />
                    </View>
                    <Text style={styles.box_text_style}>Bank transfer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.main_box_container}>
                    <View
                        style={styles.box_container_style}
                    >
                        <Image source={Appassets.NPIMobilePayment} />
                    </View>
                    <Text style={styles.box_text_style}>Phone number</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.main_box_container}>
                    <View
                        style={styles.box_container_style}
                    >
                        <Image source={Appassets.NPIQR} />
                    </View>
                    <Text style={styles.box_text_style}>UPI ID or QR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.main_box_container}>
                    <View
                        style={styles.box_container_style}
                    >
                        <Image source={Appassets.NPISelfTransfer} />
                    </View>
                    <Text style={styles.box_text_style}>Self-transfer</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default TransferMoneyComponent

const styles = StyleSheet.create({
    box_container_style: {
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            height: 0, width: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    box_text_style: {
        color: "#000",
        textAlign: "center",
        marginTop: 8,
    },
    main_box_container: {
        alignItems: "center",
        width: 60,
    }
})