import React from 'react'
import { StyleSheet, Image, View, Text,TouchableOpacity } from 'react-native'
import macbook from '../../assets/image/tech.jpg'

const Product = (props) => {
    return (
        <View>
            <View style={style.wrapper}>
                <Image source={macbook} style={style.imageProduct} />
                <Text style={style.productName}> New Macboox 2019 </Text>
                <Text style={style.productPrice}> Rp. 25.000.000</Text>
                <Text style={style.location}> Bogor Selatan </Text>

                <TouchableOpacity onPress={props.onButtonPress}> 
                    <View style={style.buttonWrapper}> 
                        <Text style={style.buttonText}> BELI </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product 

const style = StyleSheet.create({
    text: {
      margin:3,
      fontSize: 18,
      fontWeight: "bold",
      color: "#10ac84"
    },
    wrapper: {
        padding:12,
        backgroundColor:'#f2f2f2', 
        width:212, 
        borderRadius:8 
    },
    imageProduct: {
        width:188, 
        height:107, 
        borderWidth:2, 
        borderRadius:8 
    },
    productName: {
        fontSize:14,
        fontWeight:'bold', 
        marginTop:16
    },
    productPrice: {
        fontSize:12, 
        fontWeight:'bold', 
        color:'#f2994a', 
        marginTop:12
    },
    location: {
        fontSize:12, 
        fontWeight:'300',
        marginTop:12
    },
    buttonWrapper: {
        backgroundColor:'#6fcf97',
        paddingVertical:6, 
        marginTop:20, 
        borderRadius:25
    },
    buttonText: {
        fontSize:14, 
        fontWeight:'600', 
        color:'white', 
        textAlign:'center'
    }
})