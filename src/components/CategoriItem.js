import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
const CategoriItem = ({ ctgName }) => {
    console.log("categorItm ctgName", ctgName)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn_container} onPress={() => navigation.navigate("Products", { ctgName })}>
                <Text style={styles.title}>{ctgName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategoriItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    btn_container: {
        width: '80%',
        height: 150,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'

    },
    title: {
        width: '100%',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center'

    }
})