import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = (props) => {
    return (
        <View style={{alignItems:'center', marginRight:16}}> 
            <Image source={{ uri: props.gambar }} 
            style={{width:70, height:70, borderRadius: 70/2}}/>
            <Text style={{maxWidth:70, textAlign:'center', fontSize:14, fontWeight:"100"}}> {props.judul} </Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View style={{alignItems: "center"}}> 
            <Text style={{marginVertical:20, color:"gray"}}> Materi component Dinamis Dengan Props</Text>
            <ScrollView horizontal> 
                <View style={{flexDirection:'row'}}> 
                    <Story judul="Youtube Chanel" gambar="https://th.bing.com/th/id/OIP.WPkwCP97lkOksIVjQ975vQHaE7?w=254&h=180&c=7&o=5&pid=1.7" />
                    <Story judul="Kelas Online" gambar="https://th.bing.com/th/id/OIP.r1XNfuXwWyQ0KYgrXfyTtAHaFV?w=257&h=185&c=7&o=5&pid=1.7"/>
                    <Story judul="Kebayan Ngoding" gambar="https://th.bing.com/th/id/OIP.LMOWJZB60KblOj6ZfYAO_wHaEK?w=319&h=180&c=7&o=5&pid=1.7"/>
                    <Story judul="Shoot Sniper" gambar="https://th.bing.com/th/id/OIP.s7Y436-r1Q84C9kB67yp7AHaLL?w=172&h=260&c=7&o=5&pid=1.7"/>
                    <Story judul="Food Court" gambar="https://th.bing.com/th/id/OIP.jq2gOWr3d34uStEfM1v-rQHaFJ?w=243&h=180&c=7&o=5&pid=1.7"/>
                    <Story judul="Justify Keadilan" gambar="https://th.bing.com/th?id=OIF.t8Q37rWoB3GN%2bEbUf9V6YA&w=281&h=182&c=7&o=5&pid=1.7"/>
                    <Story judul="Zona Nyaman" gambar="https://th.bing.com/th/id/OIP.bjZXMklW2eE6RkEUuVvhKwHaFj?w=227&h=180&c=7&o=5&pid=1.7"/>
                    <Story judul="Dunia Malam" gambar="https://th.bing.com/th/id/OIP.8rcqAiYsNJmW5M_un3IvFAHaD3?w=273&h=180&c=7&o=5&pid=1.7"/>
                    <Story judul="Bogor Ku" gambar="https://th.bing.com/th/id/OIF.LGEu3NxC9j6oS2q6uHkRmA?w=273&h=182&c=7&o=5&pid=1.7"/>
                </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis;

const style = StyleSheet.create({

})