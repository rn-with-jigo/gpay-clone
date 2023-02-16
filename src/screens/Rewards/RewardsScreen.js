import { Image, SafeAreaView, StyleSheet, Text, View ,Platform} from 'react-native'
import React, { useEffect } from 'react'
import TopNavBarComponent from '../../components/TopNavBarComponent'
import Appassets from '../../assets/Appassets'

const RewardsScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        
            <View style={{
                flex: 1,
                marginTop: Platform.OS == "ios"?55:0,
            }}>
                <View style={{
                    padding: 16,
                }}>
                    <TopNavBarComponent isVisable={false} />
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        marginTop: 16,
                        height: 180,
                        // backgroundColor:"pink"
                    }}>

                    </View>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between",
                        padding:16,
                    }}>
                        <Text>See your total value get from rewards to get</Text>
                        <View style={{
                            backgroundColor:"#00000022",
                            padding:8,
                            borderRadius:20,
                        }}>
                        <Image source={Appassets.IRightArrow} />
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        borderTopRightRadius:16,
                        borderTopLeftRadius:16,
                        shadowColor:"#00000077",
                        shadowOffset:{
                            height:0,
                            width:0,
                        },
                        shadowOpacity:0.5,
                        shadowRadius:4,
                        elevation:20,
                        borderWidth:1,
                        borderColor:"#00000022"
                    }}>

                    </View>
                </View>
            </View>
    )
}

export default RewardsScreen

const styles = StyleSheet.create({})