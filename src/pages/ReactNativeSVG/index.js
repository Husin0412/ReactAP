import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import IllustrationMyApp from '../../assets/image/undraw_Mobile_life_re_jtih.svg'

const ReactNativeSvg = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}> Materi Menggunakan FIle SVG Dalam React Native </Text>
            <View style={styles.svgKita}> 
                <IllustrationMyApp width={244} height={125} />
            </View>
        </View>
    )
}

export default ReactNativeSvg

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    textTitle: {
        textAlign:'center'
    },
    svgKita: {
        marginTop:20,
        textAlign:'center'
    }
})
