import { View, Text, FlatList, Image } from 'react-native'
import { HStack } from "native-base"
import React from 'react'
import NameContainer from './NameContainer'
import Appassets from '../assets/Appassets'

const PeoplesContainer = () => {

    const renderPeopleItems = ({ itm, ind }) => {
        return (
            <View style={{
                backgroundColor: "#00000055",
                height: 60, width: 60,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",

            }}
                key={ind}
            >
                <Text>!</Text>
            </View>
        )
    }

    return (
        <View style={{ marginTop: 16, }}>
            <Text>People</Text>

            <View
                style={{
                    flex: 1,
                    width: "100%",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
            >
                {Array(12).fill(1).map((it, ind) => {
                    return (
                        <View style={{
                            width: "25%",
                            paddingVertical: 4,
                            alignItems: "center",
                        }}
                            key={ind}
                        >
                            <View

                                style={{
                                    backgroundColor: "#00000044",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 50, width: 50,
                                    borderRadius: 25,
                                }}
                            >
                                {ind == 11 ? null :
                                    <Image source={Appassets.GIcon} style={{resizeMode:"cover"}}/>
                                }

                            </View>
                            {ind == 11 ? null :
                                <Text style={{ marginTop: 4, }}>Item {ind + 1}</Text>
                            }
                        </View>
                    )
                })}
            </View>


            {/* <FlatList
                    data={Array(10).fill(1)}
                    renderItem={renderPeopleItems}
                    numColumns={4}
                    nestedScrollEnabled
                    ItemSeparatorComponent={() => (
                        <View
                            style={{
                                height: 10,
                            }}
                        />
                    )}
                /> */}
        </View>
    )
}

export default PeoplesContainer