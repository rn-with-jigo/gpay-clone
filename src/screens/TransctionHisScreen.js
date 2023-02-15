import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import TopNavBarComponent from '../components/TopNavBarComponent'
import Appassets from '../assets/Appassets'
import TranscationItemComponet from '../components/TranscationItemComponet'

const TransctionHisScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const transctionData = [
        {
            id:"#001",
            name:"Jeegar Goyani Shantibhai",
            ttime: "February 15, 2023 at 1:09 PM",
            amount: "10",
            isFaild: false,
        },
        {
            id:"#002",
            name:"Bharwad Sangitaben Kanubhai",
            ttime: "February 15, 2023 at 1:09 PM",
            amount: "10",
            isFaild: true,
        },
        {
            id:"#003",
            name:"Santosh",
            ttime: "February 15, 2023 at 1:05 PM",
            amount: "20",
            isFaild: false,
        },
        {
            id:"#004",
            name:"Shatm Dairy Parlour",
            ttime: "February 15, 2023 at 7:53 AM",
            amount: "28",
            isFaild: false,
        },
        {
            id:"#005",
            name:"Sangora manisbhai jankbhai",
            ttime: "February 14, 2023 at 1:21 PM",
            amount: "40",
            isFaild: false,
        },
        {
            id:"#006",
            name:"Sangora manisbhai jankbhai",
            ttime: "February 14, 2023 at 1:30 PM",
            amount: "10",
            isFaild: false,
        },
        {
            id:"#007",
            name:"Sangora manisbhai jankbhai",
            ttime: "February 14, 2023 at 1:30 PM",
            amount: "10",
            isFaild: true,
        },
        {
            id:"#008",
            name:"Jeegar Goyani Shantibhai",
            ttime: "February 14, 2023 at 10:25 AM",
            amount: "10",
            isFaild: false,
        },
        {
            id:"#009",
            name:"Andiben Chandubhai Ratod",
            ttime: "February 14, 2023 at 8:09 AM",
            amount: "10",
            isFaild: false,
        },
        {
            id:"#010",
            name:"Andiben Chandubhai Ratod",
            ttime: "February 14, 2023 at 8:05 AM",
            amount: "10",
            isFaild: true,
        },
        {
            id:"#011",
            name:"Santosh",
            ttime: "February 13, 2023 at 1:05 PM",
            amount: "20",
            isFaild: false,
        },
        {
            id:"#001",
            name:"Andiben Chandubhai Ratod",
            ttime: "February 12, 2023 at 8:09 AM",
            amount: "10",
            isFaild: false,
        },
    ]

    const TopSerachBarComponent = () => {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={styles.main_container_for_topbar}>
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
                <TopNavBarComponent newComponent={(<TopSerachBarComponent />)} />

                <View style={{
                    flex: 1,
                    marginTop: 16,
                }}>
                    <ScrollView>
                        {transctionData.map((itm, ind) => {
                            return(

                                <TranscationItemComponet key={ind} data={itm}/>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TransctionHisScreen

const styles = StyleSheet.create({
    main_container_for_topbar: {
        height: 35,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#00000011",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
    },
})