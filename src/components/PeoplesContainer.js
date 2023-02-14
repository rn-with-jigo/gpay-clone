import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PeopleShowComponent from './PeopleShowComponent'

const PeoplesContainer = () => {
    return (
        <View style={{
            padding: 8,
        }}>
            <View style={{
                marginTop: 8,
            }}>
                <Text style={{
                    fontWeight: "500",
                    color: "#000",
                    fontSize: 16,
                }}>People</Text>

                <View style={{
                    marginTop: 8,
                    flexDirection:"row",
                    flexWrap:"wrap",
                }}>
                    {Array(20).fill(1).slice(0, 11).map((ele, ind) => {
                        return (
                            <PeopleShowComponent key={ind} />
                        )
                    })}

                    <PeopleShowComponent type={"none"}/>
                </View>
            </View>
        </View>
    )
}

export default PeoplesContainer

const styles = StyleSheet.create({})