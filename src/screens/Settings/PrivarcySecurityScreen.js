import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopNavBarComponent from '../../components/TopNavBarComponent'
import Appassets from '../../assets/Appassets'

const PrivarcySecurityScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [allow_people_find_per, setAllowPeopleFindPer] = useState(false);
    const [allow_contact_per, setAllowContactPer] = useState(false);

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                padding: 16,
            }}>
                <TopNavBarComponent name={"Privacy and security"} />
                <View
                    style={{
                        marginTop: 16,
                    }}
                >
                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.SHFILook} />
                        <View style={{ marginLeft: 16, }}>
                            <Text style={styles.text_style}>Security</Text>
                            <Text style={styles.text_style_md}>Screen lock</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.button_box_container}>
                        <Image source={Appassets.SPSIPerson} />
                        <View style={{ marginLeft: 16, flex: 1, }}>
                            <Text style={styles.text_style}>Allow people to find you</Text>
                            <Text style={styles.text_style_md}>Allow people with your mobile number to
                                connect with you across Google services</Text>
                        </View>
                        <View>
                            <Switch value={allow_people_find_per}
                                onValueChange={setAllowPeopleFindPer}
                                thumbColor={"#2571F0"}
                                trackColor={{false: "#00000055", true: "rgba(66, 133, 244, 0.5);"}}
                            />
                        </View>
                    </View>

                    <View style={styles.button_box_container}>
                        <Image source={Appassets.SPSIBook} />
                        <View style={{ marginLeft: 16, flex: 1 }}>
                            <Text style={styles.text_style}>Sync your conacts</Text>
                            <Text style={styles.text_style_md}>We’ll use your contact to help you find
                                friends and avoid fraud</Text>
                        </View>
                        <View>
                            <Switch value={allow_contact_per}
                                onValueChange={setAllowContactPer}
                                thumbColor={"#2571F0"}
                                trackColor={{false: "#00000055", true: "rgba(66, 133, 244, 0.5);"}}
                                />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button_box_container}>
                        <Image source={Appassets.SPSIVerfiedUser} />
                        <View style={{ marginLeft: 16, }}>
                            <Text style={styles.text_style}>Blocked people</Text>
                            <Text style={styles.text_style_md}>Resume interaction with people who you’ve
                                blocked</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default PrivarcySecurityScreen

const styles = StyleSheet.create({
    button_box_container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    text_style: {
        fontWeight: "600",
        color: "#000",
    },
    text_style_md: {
        marginTop: 4,
        fontWeight: "600",
        color: "#00000044",
        fontSize: 12,

    }
})