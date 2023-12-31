import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import axios from 'axios'
const Products = ({ route, navigation }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const ctgName = route.params.ctgName



    useEffect(() => {
        // fetch(`https://fakestoreapi.com/products/category/${ctgName}`)
        //     .then(res => res.json())
        //     .then(data => setProducts(data))
        //     .finally(setLoading(false))
        //     .catch(error => console.log(error))

        //    axios(`https://fakestoreapi.com/products/category/${ctgName}`)            
        //     .then(res => setProducts(res.data))
        //     .finally(setLoading(false))
        //     .catch(error => console.log(error))

        const getData = async () => {
            try {
                // const {data} =axios(`https://fakestoreapi.com/products/category/${ctgName}`)  
                const res = await axios(`https://fakestoreapi.com/products/category/${ctgName}`)
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }

        getData()

        // (async()=>{
        //     try {
        //         // const {data} =axios(`https://fakestoreapi.com/products/category/${ctgName}`)  
        //          const res =axios(`https://fakestoreapi.com/products/category/${ctgName}`)  
        //          setProducts(res.data)
        //      } catch (error) {
        //          console.log(error)
        //      }
        //      setLoading(false)
        // })()

        navigation.setOptions({
            title: `${ctgName}`
        })

    }, [])

    console.log("route ctgName", ctgName)
    console.log("products", products)

    if (loading) {
        return <Text>Loading...</Text>
    }
    return (
        <FlatList
            data={products}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => <ProductItem prdctName={item} />}
        />
    )
}

export default Products

const styles = StyleSheet.create({})