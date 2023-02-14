import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/**
 * 
 * @param {String} param0 | none | vr | hr(defulat)  
 * @returns Divider Component;
 */
const DivderComponent = ({ type = null }) => {
    return (
        <View style={[
            type == "hr" ?
                { height: 3, flex: 1, borderRadius: 1.5 }
                : type == "vr" ?
                    { flex: 1, width: 3, borderRadius: 1.5 }
                    :
                    { height: 3, flex: 1, borderRadius: 1.5 }
            , {
                backgroundColor: "#00000033",
            }
        ]} />
    )
}

export default DivderComponent

const styles = StyleSheet.create({})