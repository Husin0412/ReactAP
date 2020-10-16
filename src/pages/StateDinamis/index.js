import React, {Component, useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <View> 
            <Text style={{marginVertical:8}}> {number} </Text>
            <Button title='Tambah' onPress= { () => setNumber(number + 1) } />
        </View>
    )
}

class CounterClass extends Component {
    state = {
        number: 0,
    }
    render() {
        return(
            <View> 
                <Text style={{marginVertical:8}}> {this.state.number} </Text>
                <Button title='Tambah' onPress= { () => this.setState({number: this.state.number + 1}) } />
            </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Materi component Dinamis</Text>
            <Text style={styles.titleSection}>Function component (Hooks)</Text>
            <Counter/>
            <Counter/>
            <Text style={styles.titleSection}>Class Component</Text>
            <CounterClass/>
            <CounterClass/>
        </View>
    )
}

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
        color:"gray",
    },
    titleSection: {
        marginTop:20,
    }

})
