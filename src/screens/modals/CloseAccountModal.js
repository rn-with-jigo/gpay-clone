import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'

const CloseAccountModal = ({ navigation }) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#00000044",
            justifyContent: "center",
            alignItems: "center",
        }}>

            <View style={{
                height: 200,
                width: "90%",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 8,
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <View
                        style={{ flex: 1, marginTop: 16, marginLeft: 16, }}
                    >
                        <Text style={{
                            fontWeight: "800",
                            fontSize: 16,
                            color: "#000",
                            marginBottom:8,
                        }}>Are you sure?</Text>
                        <Text style={styles.content_text_style}>Your account will be closed.</Text>
                        <Text style={styles.content_text_style}>-Any UPI accounts will be deregistered</Text>
                        <Text style={styles.content_text_style}>-Any gold vault balance may be lost.</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity style={{
                            padding: 8,
                        }}
                            onPress={() => {
                                navigation.pop(1)
                            }}
                        >
                            <Text style={{
                                fontWeight: "700",
                                color: "#2571F0",
                            }}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            padding: 8,
                        }}
                            onPress={() => {
                                navigation.pop(1)
                            }}
                        >
                            <Text style={{
                                fontWeight: "700",
                                color: "#2571F0",
                            }}>Close account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
        
    )
}

export default CloseAccountModal

const styles = StyleSheet.create({
    content_text_style: {
        fontWeight: "500",
        fontSize: 16,
        color: "#00000055",
    }
})