import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Appassets from '../../assets/Appassets'
import { nvaStrings } from '../../utils/navStrings'

const SettingsScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView
            style={{ flex: 1, }}
        >
            <View style={{
                padding: 16,
                flex: 1,
            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Image source={Appassets.SICross} style={{ height: 15, width: 15, }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Appassets.PIMenu} />
                    </TouchableOpacity>
                </View>

                <Text style={{
                    fontWeight: "500",
                    fontSize: 20,
                    color: "#000",
                    marginTop: 24
                }}>Settings</Text>
                <View style={{ flex: 1, }}>
                    <TouchableOpacity style={styles.button_box_container}
                        onPress={() => {
                            navigation.navigate(nvaStrings.ProfileInfoScreen)
                        }}
                    >
                        <Image source={Appassets.SIUser} style={{ height: 20, width: 20, tintColor: "#2571F0" }} />
                        <Text style={styles.text_style}>Personal info</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}
                        onPress={() => {
                            navigation.navigate(nvaStrings.NotifyEmailScreen)
                        }}
                    >
                        <Image source={Appassets.SINotify} style={{ height: 20, width: 20, tintColor: "#2571F0" }} />
                        <Text style={styles.text_style}>Notification and emails</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}
                        onPress={() => {
                            navigation.navigate(nvaStrings.PrivarcySecurityScreen)
                        }}
                    >
                        <Image source={Appassets.SIPSecirity} />
                        <Text style={styles.text_style}>Privacy and security</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.SINote} />
                        <Text style={styles.text_style}>Raise BBPS dispute</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 2, backgroundColor: "#00000033" }} />

                    <TouchableOpacity style={styles.button_box_container}
                        onPress={() => {
                            navigation.navigate(nvaStrings.HelpFeedScreen)
                        }}
                    >
                        <Image source={Appassets.PIQuestion} />
                        <Text style={styles.text_style}>Help & feedback</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}
                        onPress={() => {
                            navigation.push(nvaStrings.LogoutModal)
                        }}
                    >
                        <Image source={Appassets.SILougout} />
                        <Text style={styles.text_style}>Log out</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_box_container}
                        onPress={() => {
                            navigation.push(nvaStrings.CloseAccountModal)
                        }}
                    >
                        <Image source={Appassets.SIPower} />
                        <Text style={styles.text_style}>Close account</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default SettingsScreen

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