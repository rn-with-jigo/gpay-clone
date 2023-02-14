import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopNavBarComponent from '../../components/TopNavBarComponent'
import DivderComponent from '../../components/DivderComponent'

const NotifyEmailScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    let notificationData = [
        {
            id: "#001",
            title: "Google Pay Tips",
            subtitle: "Get tips on getting the most out of Google Pay, made just for you",
            status: true,
        },
        {
            id: "#002",
            title: "Friends' activity",
            subtitle: "Receive alerts about what’s new with your contacts and friends ",
            status: true,
        },
        {
            id: "#003",
            title: "Smart Alerts",
            subtitle: "Get notified of payment requests and upcoming bills",
            status: true,
        },
        {
            id: "#004",
            title: "Offers & Rewards",
            subtitle: "Find out when you earn new rewards, and stay up to date on offers.",
            status: true,
        },
        {
            id: "#005",
            title: "Transaction history and recommendations",
            subtitle: "Get summaries and useful recommendations based on your Google Pay transaction history",
            status: true,
        },
        {
            id: "#006",
            title: "Chat messages",
            subtitle: "Get notified about incoming chat messages",
            status: true,
        },
        {
            id: "#007",
            title: "Location-based alerts",
            subtitle: "Turn on background location to get timely reminders from shops around you",
            status: false,
        },
        {
            id: "#008",
            title: "Order updates",
            subtitle: "Get notified about updates to your orders",
            status: true,
        },
    ]

    let emailsData = [
        {
            id: "#001",
            title: "Google Pay Tips",
            subtitle: "Receive  personalised suggestions on how to get the most out of Google Pay",
            status: true,
        },
        {
            id: "#002",
            title: "Offers & Rewards",
            subtitle: "Get notified of offers or rewards through emails",
            status: true,
        },
        {
            id: "#003",
            title: "Transaction insights and recommendations",
            subtitle: "Get summaries and useful recommendations based on your Google Pay transaction historyy",
            status: true,
        },

    ]

    const [notifiData, setNotifiData] = useState(notificationData)
    const [emData, setEmData] = useState(emailsData);

    function onChnageNotifyData(ind, value) {
        // let temp = [];
        // temp = notifiData;
        // temp[ind] = value
        let final_change_arry = notifiData.map((ele, i) => {
            if(i == ind){
                ele.status = value
            }
            return ele
        })
        // console.log("final_change_arry => ", final_change_arry);
        setNotifiData(final_change_arry)
    }

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                padding: 16,
            }}>
                <TopNavBarComponent name={"Notifications and emails"} />
                <View style={{
                    marginTop: 16,
                    flex: 1,
                }}>
                    <Text>You’ll get a notification after every payment
                        transaction. Manage all other notification here.</Text>

                    <ScrollView
                        contentContainerStyle={{
                            // marginTop:16,
                            paddingBottom: 16,
                        }}
                    >
                        <Text style={{
                            color: "#00000055",
                            fontWeight: "600",
                            fontSize: 16,
                            marginTop: 16,
                        }}>NOTIFICATIONS</Text>

                        <View style={{
                            paddingHorizontal: 8,
                            marginTop: 16,
                        }}>
                            {notifiData.map((itm, ind) => {
                                // console.log(itm);
                                return (
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical: 16,
                                        justifyContent: "space-between"
                                    }} key={ind}>
                                        <View style={{
                                            flex: 0.8,
                                        }}>
                                            <Text style={{
                                                fontWeight: "500",
                                                color: "#000",
                                                fontSize: 16,
                                            }}>{itm?.title}</Text>
                                            <Text style={{
                                                marginTop: 4,
                                                fontWeight: "600",
                                                color: "#00000055",
                                                fontSize: 12,
                                            }}>{itm?.subtitle}</Text>
                                        </View>
                                        <Switch
                                            onValueChange={(val) => {
                                                // console.log("value => ", val);
                                                onChnageNotifyData(ind, val)
                                            }}
                                            value={itm.status}
                                            thumbColor={"#2571F0"}
                                            trackColor={{ false: "#00000055", true: "rgba(66, 133, 244, 0.5);" }}
                                        />
                                    </View>
                                )
                            })}
                        </View>

                        <DivderComponent />

                        <Text style={{
                            color: "#00000055",
                            fontWeight: "600",
                            fontSize: 16,
                            marginTop: 16,
                        }}>EMAILS</Text>

                        <View style={{
                            paddingHorizontal: 8,
                            marginTop: 16,
                        }}>
                            {emData.map((itm, ind) => {
                                // console.log(itm);
                                return (
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginVertical: 16,
                                        justifyContent: "space-between"
                                    }} key={ind}>
                                        <View style={{
                                            flex: 0.8,
                                        }}>
                                            <Text style={{
                                                fontWeight: "500",
                                                color: "#000",
                                                fontSize: 16,
                                            }}>{itm?.title}</Text>
                                            <Text style={{
                                                marginTop: 4,
                                                fontWeight: "600",
                                                color: "#00000055",
                                                fontSize: 12,
                                            }}>{itm?.subtitle}</Text>
                                        </View>
                                        <Switch
                                            value={itm.status}
                                            thumbColor={"#2571F0"}
                                            trackColor={{ false: "#00000055", true: "rgba(66, 133, 244, 0.5);" }}
                                        />
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NotifyEmailScreen

const styles = StyleSheet.create({})