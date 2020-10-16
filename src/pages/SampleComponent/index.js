import React, {Component} from 'react'
import {View,Text,TextInput,Image} from 'react-native'

const SampleComponent = () => {
    return (
      <View>
        <View style={{width: 500, height: 80, backgroundColor:'#0abde3'}}/>
        <Homiped/>
        <Text>Bapak Rustandi</Text>
        <Text>Ibu Siti Jumi</Text>
        <Text>Bapak Sumanto</Text>
        <Photo/>
        <TextInput style={{borderWidth:1, margin:3}}/>
        <BoxGreen/>
        <Profile/>
      </View>
    )
  }
  
  const Homiped = () => {
    return <Text>Homiped baru bagus</Text>
  }
  
  const Photo = () => {
    return <Image source={{ uri: 'https://placeimg.com/100/100/people' }} style={{height:100, width:100, margin:5}}/>
  }
  
  class BoxGreen extends Component {
    render() {
      return <Text>Ini component dari class</Text>
    }
  }
  
  class Profile extends Component {
    render() {
      return (
        <View> 
          <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={{width:100, height:100, margin:5, borderRadius:50}}/>
          <Text style={{margin:5, color:'blue', fontSize:24}}>Ini Hewan Jelek</Text>
        </View>
      )}
  }
  
  export default SampleComponent;