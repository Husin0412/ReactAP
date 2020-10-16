import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cart from '../../Components/Cart'
import Product from '../../Components/Product'

const Communication = () => {
    const [totalProduct, settotalProduct] = useState(0)
    

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}> Materi Communication Antar Componnent</Text>
            <Cart quantity={totalProduct}/>
            <Product onButtonPress={() => settotalProduct(totalProduct + 1)}/>
        </View>
    )
}

export default Communication;

const styles = StyleSheet.create({
    container: {
        padding:15,
    },
    textTitle: {
        textAlign:'center'
    }
})
