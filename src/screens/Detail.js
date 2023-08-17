import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Detail = ({ route, navigation }) => {
    // const prdctName = route.params.prdctName
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const prdctId = route.params.id

    useEffect(() => {
        // fetch(`https://fakestoreapi.com/products/${prdctId}`)
        //     .then(res => res.json())
        //     .then(data => setProduct(data))
        //     .finally(setLoading(false))
        //     .catch(error => console.log(error))
        const getData = async () => {
            try {
                const res = await axios(`https://fakestoreapi.com/products/${prdctId}`)
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }

        getData()

    }, [])

    console.log("prdctId---", prdctId)
    console.log("product---", product)

    if (loading) {
        return <Text>Loading...</Text>
    }


    return (
        <ScrollView>

            <View style={styles.container}>
                {product.image && <Image source={{ uri: product.image }} style={styles.image} />}
                <Text style={styles.title}>NAME: {product?.title}</Text>
                <Text style={styles.descrip}>DESCRIPTION: {product?.description}</Text>
                <Text style={styles.price}>PRICE: {product?.price}</Text>
                <Text style={styles.count}>COUNT: {product?.rating?.count}</Text>
                <Text style={styles.rate}>RATE: {product?.rating?.rate}</Text>
            </View>
        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },
    image: {
        width: '80%',
        height: 200,
    },
    title: {
        fontStyle: 'italic',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    descrip: {
        fontSize: 18,
        fontStyle: 'italic',
    },
    price: {
        fontSize: 25,
        color: 'green',
        fontWeight: 'bold'
    },
    count: {
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold'
    },
    rate: {
        fontSize: 25,
        color: 'orange',
        fontWeight: 'bold'
    }
})