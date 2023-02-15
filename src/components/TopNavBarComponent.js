import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Appassets from '../assets/Appassets';
import { useNavigation } from '@react-navigation/native';

const TopNavBarComponent = ({ name, newComponent = null, isVisable = true }) => {

    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
        }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image source={Appassets.PILeftArrow} />
            </TouchableOpacity>
            {newComponent ?
                newComponent
                :
                isVisable?
                <Text style={{
                    flex: 1,
                    fontWeight: "600",
                    fontSize: 20,
                    color: "#000",
                    marginLeft: 16,
                }}>{name || "undefined"}</Text>
                : <View style={{flex:1,}} />
            }
            <TouchableOpacity>
                <Image source={Appassets.PIMenu} />
            </TouchableOpacity>
        </View>
    )
}

export default TopNavBarComponent

const styles = StyleSheet.create({})