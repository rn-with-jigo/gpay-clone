import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import TopNavBarComponent from '../../components/TopNavBarComponent'
import Appassets from '../../assets/Appassets'

const HelpFeedScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                padding: 16,
            }}>
                <TopNavBarComponent name={"Help and feedback"} />
                <View
                    style={{
                        marginTop: 16,
                    }}
                >
                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.PIQuestion} style={{ height: 20, width: 20, tintColor: "#2571F0" }} />
                        <Text style={styles.text_style}>Get help</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.SHFIBook} style={{ height: 20, width: 20, }} />
                        <Text style={styles.text_style}>Send feedback</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.SHFIDocument} style={{ height: 20, width: 20, }} />
                        <Text style={styles.text_style}>Terms of Service</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.SHFILook} style={{ height: 20, width: 20, }} />
                        <Text style={styles.text_style}>Privacy policy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.SHFISmartPhone} style={{ height: 20, width: 20, }} />
                        <Text style={styles.text_style}>Software licences</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.SHFIInfo} style={{ height: 20, width: 20,tintColor: "#00000055" }} />
                        <Text style={styles.text_style}>Version 120.1.3(arm64-{"\n"}
                            v8a_release_flutter)</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default HelpFeedScreen

const styles = StyleSheet.create({
    button_box_container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    text_style: {
        fontWeight: "600",
        color: "#000",
        marginLeft: 16,
    }
})