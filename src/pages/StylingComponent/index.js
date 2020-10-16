import React, {Component} from 'react';
import {Text,View,Image,TextInput, StyleSheet, ScrollView} from 'react-native';
import macbook from '../../assets/image/tech.jpg';

const StylingComponent = () => {
    return (
      <View>
        <Text style={style.text}> Styling component </Text>
         <View style={{
           width: 500, 
           height: 80, 
           backgroundColor:'#0abde3',
           borderWidth:2,
           borderColor:'black'
           }}/>
  
          <View style={{padding:12, backgroundColor:'#f2f2f2', width:212, borderRadius:8 }}>
            <Image source={macbook} style={{width:188, height:107, borderWidth:2, borderRadius:8 }} />
            <Text style={{fontSize:14, fontWeight:'bold', marginTop:16}}> New Macboox 2019 </Text>
            <Text style={{fontSize:12, fontWeight:'bold', color:'#f2994a', marginTop:12}}> Rp. 25.000.000</Text>
            <Text style={{fontSize:12, fontWeight:'300', marginTop:12}}> Bogor Selatan </Text>
  
            <View style={{backgroundColor:'#6fcf97',paddingVertical:6, marginTop:20, borderRadius:25}}> 
              <Text style={{fontSize:14, fontWeight:'600', color:'white', textAlign:'center'}}> BELI </Text>
            </View>
          </View>
      </View>
    )
  }
  
  const style = StyleSheet.create({
    text: {
      margin:3,
      fontSize: 18,
      fontWeight: "bold",
      color: "#10ac84"
    }
  })
  
export default StylingComponent;  