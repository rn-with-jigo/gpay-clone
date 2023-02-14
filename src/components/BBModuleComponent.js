import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PeopleShowComponent from './PeopleShowComponent'
import Appassets from '../assets/Appassets'

const BBModuleComponent = () => {

    const data = [
        {
            id: "#001",
            name: "MakeMyTrip",
            img: Appassets.IMyTrip,
        },
        {
            id: "#002",
            name: "redBus",
            img: Appassets.IRedBus,
        },
        {
            id: "#003",
            name: "Tata Sky",
            img: Appassets.ITatasky,
        },
        {
            id: "#004",
            name: "Yatra",
            img: Appassets.IYatra,
        },
        {
            id: "#005",
            name: "Barista",
            img: Appassets.IBarista,
        },
        {
            id: "#006",
            name: "McDelivery",
            img: Appassets.IMacd,
        },
        {
            id: "#007",
            name: "Zomato",
            img: Appassets.IZomato,
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

            <PeopleShowComponent type={"none"} />
        </View>
    )
}

export default BBModuleComponent

const styles = StyleSheet.create({})