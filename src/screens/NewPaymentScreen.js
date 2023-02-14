import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopNavBarComponent from '../components/TopNavBarComponent'
import Appassets from '../assets/Appassets'
import RechargePaybillComponent from '../components/RechargePaybillComponent'
import TransferMoneyComponent from '../components/TransferMoneyComponent'
import ContactListComponent from '../components/ContactListComponent'

const NewPaymentScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [selected_tab, setSelectedTab] = useState(0)

    const TopSerachBarComponent = () => {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    height: 35,
                    width: "90%",
                    alignSelf: "center",
                    backgroundColor: "#00000011",
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 8,
                }}>
                    <Image source={Appassets.NPISerach} />
                    <TextInput
                        style={{
                            marginLeft: 8,
                            fontSize: 12,

                        }}
                        placeholder="Search mobile number"
                        placeholderTextColor={"#00000055"}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                padding: 16,
            }}>
                <TopNavBarComponent
                    newComponent={(<TopSerachBarComponent />)}
                />
                <ScrollView>
                    <View style={{
                        flexDirection: "row",
                        height: 40,
                        // backgroundColor:"pink",
                        marginTop: 16,
                        paddingHorizontal: 16,
                        justifyContent: "space-evenly",
                    }}>
                        <TouchableOpacity style={[{
                            flex: 1,
                            alignItems: "center",
                        }, selected_tab == 0 ? styles.apply_bottom_border : null]}
                            onPress={() => {
                                setSelectedTab(0)
                            }}
                        >
                            <Text style={[{
                                fontWeight: "600",
                                color: "#000",
                                fontSize: 14,
                            }, selected_tab == 0 ? { color: "#2571F0" } : null]}>People and bills</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[{
                            flex: 1,
                            alignItems: "center",
                        }, selected_tab == 1 ? styles.apply_bottom_border : null]}
                            onPress={() => {
                                setSelectedTab(1)
                            }}
                        >
                            <Text style={[{
                                fontWeight: "600",
                                color: "#000",
                                fontSize: 14,
                            }, selected_tab == 1 ? { color: "#2571F0" } : null]}>Businesses</Text>
                        </TouchableOpacity>
                    </View>

                    <RechargePaybillComponent />

                    <TransferMoneyComponent />

                    <ContactListComponent />
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default NewPaymentScreen

const styles = StyleSheet.create({
    apply_bottom_border: {
        borderBottomWidth: 2,
        borderBottomColor: "#2571F0",
    }
})