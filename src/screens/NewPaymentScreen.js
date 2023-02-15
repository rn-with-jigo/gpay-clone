import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopNavBarComponent from '../components/TopNavBarComponent'
import Appassets from '../assets/Appassets'
import RechargePaybillComponent from '../components/RechargePaybillComponent'
import TransferMoneyComponent from '../components/TransferMoneyComponent'
import ContactListComponent from '../components/ContactListComponent'
import TreadingComponent from '../components/TreadingComponent'
import QucikBookingTabs from '../components/QucikBookingTabs'
import SingleDisplayComponent from '../components/SingleDisplayComponent'
import ShoppingComponent from '../components/ShoppingComponent'

const NewPaymentScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [selected_tab, setSelectedTab] = useState(0)

    const trainData = {
        heading: "Trains",
        title: "Tickets with IRCTC",
        btnText: "Book travel",
        backg: true,
        iimg: Appassets.NPBITrain,
    }
    const goldData = {
        heading: "Gold",
        backg: false,
        title: "Buy, sell, and gift gold",
        btnText: "Buy gold",
        iimg: Appassets.NPBIGold,
    }

    const singleDisplayData = [
        {
            id: "#001",
            comheading: "Food",
            isIcon: true,
            iconImg: Appassets.NPBBMcD,
            heading: "Free Veg Pizza McPuff on ₹200 order on McDelivery",
            title: "Use code PIZZA12, now till Mar 31",
            btntext: "Order Now",
            img: Appassets.NPBBFoodMcPuff
        },
        {
            id: "#002",
            comheading: "Daily Essentials",
            isIcon: false,
            heading: "Buy bigbasket e-gift on woohoo get up to 20% discount",
            title: "Now till Mar 311",
            btntext: "Buy Now",
            img: Appassets.NPBBDailyEssentials
        },
        {
            id: "#001",
            comheading: "Finance",
            isIcon: false,
            heading: "50% off process free for personal loans on Money View Loans",
            title: "Redeemable multiples times, till Apr 1",
            btntext: "Apply Now",
            img: Appassets.NPBBFinance
        },
    ]

    const shoppingData = [
        {
            id: "#001",
            heading: "Buy Myntra e-gift on woohoo, get up to 20% discount",
            title: "Now till Mar 31",
            btntext: "Buy Now",
            banner: Appassets.NPBBShoppingGifts,
        },
        {
            id: "#002",
            heading: "Get 55% off on Coolwinks eyewear",
            title: "Use code ABCD12, now till Apr 1",
            btntext: "Buy Now",
            banner: Appassets.NPBBShoppingEyeware,
        }
    ]

    const singleDisplayLocalData = {
        id: "#001",
        comheading: "Local Services",
        isIcon: false,
        heading: "Get 40% off on your next doctor visit on DocsApp",
        title: "Use code ABCD12, now till Apr 1",
        btntext: "Book now",
        img: Appassets.NPBBLocalService
    }

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
                <TopNavBarComponent
                    newComponent={(<TopSerachBarComponent />)}
                />

<View style={{
                        flexDirection: "row",
                        height: 40,
                        // backgroundColor:"pink",
                        marginTop: 16,
                        paddingHorizontal: 16,
                        justifyContent: "space-evenly",
                    }}>
                        <TouchableOpacity style={[{
                            flex: 1,
                            alignItems: "center",
                        }, selected_tab == 0 ? styles.apply_bottom_border : null]}
                            onPress={() => {
                                setSelectedTab(0)
                            }}
                        >
                            <Text style={[{
                                fontWeight: "600",
                                color: "#000",
                                fontSize: 14,
                            }, selected_tab == 0 ? { color: "#2571F0" } : null]}>People and bills</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[{
                            flex: 1,
                            alignItems: "center",
                        }, selected_tab == 1 ? styles.apply_bottom_border : null]}
                            onPress={() => {
                                setSelectedTab(1)
                            }}
                        >
                            <Text style={[{
                                fontWeight: "600",
                                color: "#000",
                                fontSize: 14,
                            }, selected_tab == 1 ? { color: "#2571F0" } : null]}>Businesses</Text>
                        </TouchableOpacity>
                    </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    

                    {selected_tab == 0 ?
                        <>
                            <RechargePaybillComponent />

                            <TransferMoneyComponent />

                            <ContactListComponent />
                        </>
                        : selected_tab == 1 ?
                            <>
                                <TreadingComponent />

                                <QucikBookingTabs data={trainData} />

                                {singleDisplayData.map((itm, ind) => {
                                    return (
                                        <SingleDisplayComponent key={ind} data={itm} />
                                    )
                                })}

                                <QucikBookingTabs data={goldData} />

                                <ShoppingComponent data={shoppingData} />

                                <SingleDisplayComponent data={singleDisplayLocalData} />
                            </>
                            : null}

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default NewPaymentScreen

const styles = StyleSheet.create({
    apply_bottom_border: {
        borderBottomWidth: 2,
        borderBottomColor: "#2571F0",
    },
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