import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoriItem from '../components/CategoriItem'
import axios from 'axios'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch("https://fakestoreapi.com/products/categories")
        //     .then(res => res.json())
        //     .then(data => setCategories(data))
        //     .finally(setLoading(false))
        //     .catch(error => console.log(error))


        const getData = async () => {
            try {
                const res = await axios(`https://fakestoreapi.com/products/categories`)
                setCategories(res.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }

        getData()
    }, [])

    console.log("categories---", categories)

    if (loading) {
        return <Text>Loading...</Text>
    }

    return (
        <FlatList
            data={categories}
            keyExtractor={(item, index) => item}
            renderItem={({ item }) => <CategoriItem ctgName={item} />}
        />
    )
}

export default Categories

const styles = StyleSheet.create({})