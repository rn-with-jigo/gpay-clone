import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { Center, HStack, Image, Text, View, VStack } from 'native-base'
import Appassets from '../assets/Appassets'
import { nvaStrings } from '../utils/navStrings'

const SplashScreen = (props) => {

    useEffect(() => {
        props.navigation.setOptions({
            headerShown: false,
        })

        setTimeout(() => {
            props.navigation.navigate(nvaStrings.Homescreen)
        }, 3000)
    },)

    return (
        <SafeAreaView>
            <VStack
                height={"full"} width={"full"}
                justifyContent={"center"} alignItems={"center"}
            >
                <Image source={Appassets.SplashLogo} alt="gpaylogo" />
            </VStack>
            <View position={"absolute"} bottom={16} alignSelf="center">
                <Image source={Appassets.GoogleText} alt="googletext" />
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen