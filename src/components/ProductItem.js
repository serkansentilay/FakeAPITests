import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
const ProductItem = ({ prdctName }) => {
    console.log("prdctItem,prdctnam", prdctName)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.btn_container} onPress={() => navigation.navigate("Detail", { id: prdctName.id })}>
                <Image source={{ uri: prdctName.image }} style={styles.image} />
                <Text style={styles.title}>{prdctName.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
    },
    btn_container: {
        backgroundColor: 'yellow',
    },
    image: {
        width: 300,
        height: 200,
        alignSelf: 'center'
    },
    title: {
        fontStyle: 'italic',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    }
})