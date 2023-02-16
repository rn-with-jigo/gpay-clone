import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PeopleShowComponent from './PeopleShowComponent'
import Appassets from '../assets/Appassets'
import { useNavigation } from '@react-navigation/native'
import { nvaStrings } from '../utils/navStrings'

const SWModuleComponent = () => {

    const navigation = useNavigation()

    const data = [
        {
            id: "#001",
            name: "Rewards",
            img: Appassets.IRewards,
            onPress: () => {
                navigation.navigate(nvaStrings.RewardsScreen)
            }
        },
        {
            id: "#002",
            name: "Offers",
            img: Appassets.IOffers,
        },
        {
            id: "#003",
            name: "Go India",
            img: Appassets.IGoIndia,
        },
        {
            id: "#004",
            name: "Referrals",
            img: Appassets.IRReferrals,
        },
    ]

    return (
        <View
            style={{
                marginTop: 8,
                flexDirection: "row",
                flexWrap: "wrap",
            }}
        >

            {data.map((ele, ind) => {
                return (
                    <PeopleShowComponent key={ind} ele={ele} />
                )
            })}
        </View>
    )
}

export default SWModuleComponent

const styles = StyleSheet.create({})