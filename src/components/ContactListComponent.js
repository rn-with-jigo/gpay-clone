import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Appassets from '../assets/Appassets'

const ContactListComponent = () => {

    let contactInfo = [
        {
            id:"#0001",
            name:"Jeegar Goyani",
            phone: "+ 91 76218 27682",
            img: null,
        },
        {
            id:"#0002",
            name:"Kaira",
            phone: "+ 91 76218 27682",
            img: Appassets.NPUIKaira,
        },
        {
            id:"#0003",
            name:"Soctt",
            phone: "+ 91 76218 27682",
            img: null,
        },
        {
            id:"#0004",
            name:"Alex",
            phone: "+ 91 76218 27682",
            img: Appassets.NPUIAlex,
        },
        {
            id:"#0005",
            name:"Elly",
            phone: "+ 91 76218 27682",
            img: Appassets.NPUIElly,
        },
        {
            id:"#0006",
            name:"Bunny",
            phone: "+ 91 76218 27682",
            img: Appassets.NPUIBunny,
        },
        {
            id:"#0007",
            name:"Hank",
            phone: "+ 91 76218 27682",
            img: Appassets.NPUIHank,
        },
    ]

    return (
        <View
            style={{
                marginTop: 16,
                paddingHorizontal: 8,
            }}
        >
            {contactInfo.map((ele, i) => {
                return (
                    <View key={i}
                        style={{
                            marginVertical: 8,
                            flexDirection: "row",
                        }}
                    >
                        {ele.img != null?
                            <Image source={ele.img} />
                        :
                        <View style={styles.icon_main_container}>
                            <Text style={styles.icon_text_style}>{ele.name.charAt(0).toUpperCase()}</Text>
                        </View>
                        }
                        <View style={{
                            marginLeft: 16,
                            marginVertical:4,
                        }}>
                            <Text style={styles.contact_name_style}>{ele?.name}</Text>
                            <Text style={styles.contact_number_style}>{ele.phone}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default ContactListComponent

const styles = StyleSheet.create({
    contact_name_style:{
        fontWeight: "600",
        color: "#000",
        fontSize: 16,
        flex:1,
    },
    contact_number_style:{
        fontWeight: "500",
        color: "#00000044",
        fontSize: 14,
    },
    icon_main_container:{
        height: 50, width: 50,
        backgroundColor: "#00000055",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    icon_text_style:{
        fontWeight: "800",
        color: "#000",
        fontSize: 18,
    },
})