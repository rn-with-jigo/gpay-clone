import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LogoutModal = ({ navigation }) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#00000044",
            justifyContent: "center",
            alignItems: "center",
        }}>

            <View style={{
                height: 150,
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
                        }}>Log out from Google Pay</Text>
                        <Text style={styles.content_text_style}>You will have to enter your security lock when you relaunch the app.</Text>
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
                            }}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default LogoutModal

const styles = StyleSheet.create({
    content_text_style: {
        fontWeight: "500",
        fontSize: 16,
        color: "#00000055",
        marginTop: 8,
    }
})