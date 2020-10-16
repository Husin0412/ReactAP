import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascript = () => {

    // Tipe Data
    // primitive
    const nama = 'Saepulloh Iswanto' // string
    let usia = 21 // number
    const apakahLakiLaki = true // bolean

    // complex
    const hewanPeliharaan = {
        nama: 'Miaw',
        jenis: 'Kucing',
        usia: 2,
        apakahHewanLocal: true,
        warna: 'kuning',
        orangTua: {
            jantan: 'Kaisar',
            betina: 'Kuin'
        }
    } // object

    const sapaOrang = (name, age) => {
        return console.log(`Hello ${name} usia anda ${age}`)
    } // function

    sapaOrang('Halilintar', 32)

    const namaOrang = ['Barok', 'Ismanto', 'Renald', 'Mahmud', 'Hariono', 'Bambang']

    typeof namaOrang;

    // if(hewanPeliharaan.nama == 'Miaw') {
    //     console.log('hello miaw')
    // } else {
    //     console.log('hewan siapa ini?')
    // }

    const sapaHewan = objectHewan => {
        // let hasilSapa = ''
        // if(objectHewan.nama == 'Miaw') {
        //     hasilSapa = 'Hallo Miaw, Apa Kabar'
        // } else {
        //    hasilSapa = 'hewan siapa ini ?'
        // }
        // return hasilSapa
        return objectHewan.nama === 'Miaw' ? 'Hallo Miaw Apa Kabar' : 'Ini Hewan Siapa ?'
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Basic Javascript di Reac Native</Text>
            <Text>Name : {nama}</Text>
            <Text>Age : {usia}</Text>
            <Text>{sapaHewan(hewanPeliharaan)}</Text>
            <Text>{namaOrang[0]} </Text>
            <Text>{namaOrang[1]} </Text>
            <Text>{namaOrang[2]} </Text>
            <Text> ======= </Text>
            { namaOrang.map(orang => ( <Text> {orang} </Text> )) }
        </View>
    )
}

export default BasicJavascript

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    }
})
