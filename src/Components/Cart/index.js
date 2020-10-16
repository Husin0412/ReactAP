import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import cartImg from '../../assets/image/cart.jpg'

const Cart = (props) => {
    return (
        <View style={style.wrapper}> 
            <View style={style.cartWrapper}> 
                <Image style={style.iconCart} source={cartImg}/>
                <Text style={style.notif}>{props.quantity}</Text>
            </View>
            <Text style={style.textKeranjang}> Keranjang Belanja Anda</Text>
        </View>
    )
}

export default Cart;

const style = StyleSheet.create({
    wrapper : {
        padding: 20,
        alignItems:'center',
    },
    textMateri : {
        fontSize:15,
        fontWeight:'200',
        color:"grey"
    },
    cartWrapper : {borderWidth:1, 
        borderColor:'#4398d1', 
        width:93, 
        height:93, 
        borderRadius:93/2,
        justifyContent:'center',
        alignItems:'center',
        position: 'relative',
        marginTop:40
    },
    iconCart : { width:50, 
        height:50
    },
    textKeranjang : {
        fontSize: 12, 
        color: '#777777',
        fontWeight: '700',
        marginTop: 8,
    },
    notif: {
        fontSize:12,
        color:'white',
        backgroundColor: '#6fcf97',
        padding:5,
        borderRadius:25,
        width:24,
        height:24,
        position: "absolute",
        top: 0,
        right:3,
        textAlign:'center',
    }
})

