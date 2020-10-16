import React, {Component, useEffect, useState} from 'react'
import {Text, View, Image} from 'react-native'

// class FlexBox extends Component {
//     constructor(props) {
//         super(props)
//         console.log('==> constructor')
//         this.state = {
//             subscriber: 200
//         }
//     }

//     componentDidMount() {
//         console.log('==> componentDidmount')
//         setTimeout(() => {
//             this.setState({
//                 subscriber:400,
//             });
//         }, 4000);
//     }

//     componentDidUpdate() {
//         console.log('==> component did update')
//     }

//     componentWillUnmount() {
//         console.log('==> componen will unmount')
//     }

//     render() {
//         console.log('==> render')
//             return (
//             <View> 
//                 <View style={{flexDirection:'row', backgroundColor:'#c8d6e5', alignItems:'center', justifyContent:'space-between'}}> 
//                     <View style={{backgroundColor:'#ee5253', width:50, height:50}}/> 
//                     <View style={{backgroundColor:'#feca57', width:50, height:50}}/> 
//                     <View style={{backgroundColor:'#1dd1a1', width:50, height:50}}/>
//                     <View style={{backgroundColor:'#5f27cd', width:50, height:50}}/>
//                 </View>

//                 <View style={{flexDirection:'row', justifyContent:'space-around', margin:3}}> 
//                     <Text> Beranda</Text>    
//                     <Text> Video </Text>                    
//                     <Text> Playlist </Text>    
//                     <Text> Komunitas </Text>    
//                     <Text> Tentang </Text>    
//                 </View>

//                 <View style={{flexDirection:'row', marginTop:20, marginLeft:8, alignItems:'center'}}> 
//                     <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7h-f5HkbyVATME3SHaEfSMIUDGEIodfigCQ&usqp=CAU'}} 
//                     style={{width:100, height:100, borderRadius:50, marginRight:14}}/>
//                     <View> 
//                         <Text style={{fontSize:20, fontWeight:'bold'}}> Siti Julaeha </Text>
//                         <Text> {this.state.subscriber} ribu subcriber </Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }


const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200)

    useEffect(() => {
        console.log('did mount')
        setTimeout(() => {
            setSubscriber(400)
        }, 2000)
        return () => {
            console.log('did update')
        }
    }, [subscriber])

    // useEffect(() => {
    //     console.log('did update')
    //     setTimeout(() => {
    //         setSubscriber(400)
    //     }, 2000);
    // }, [subscriber])

    return (
        <View> 
            <View style={{flexDirection:'row', backgroundColor:'#c8d6e5', alignItems:'center', justifyContent:'space-between'}}> 
                <View style={{backgroundColor:'#ee5253', width:50, height:50}}/> 
                <View style={{backgroundColor:'#feca57', width:50, height:50}}/> 
                <View style={{backgroundColor:'#1dd1a1', width:50, height:50}}/>
                <View style={{backgroundColor:'#5f27cd', width:50, height:50}}/>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', margin:3}}> 
                <Text> Beranda</Text>    
                <Text> Video </Text>                    
                <Text> Playlist </Text>    
                <Text> Komunitas </Text>    
                <Text> Tentang </Text>    
            </View>

            <View style={{flexDirection:'row', marginTop:20, marginLeft:8, alignItems:'center'}}> 
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7h-f5HkbyVATME3SHaEfSMIUDGEIodfigCQ&usqp=CAU'}} 
                style={{width:100, height:100, borderRadius:50, marginRight:14}}/>
                <View> 
                    <Text style={{fontSize:20, fontWeight:'bold'}}> Siti Julaeha </Text>
                    <Text> {subscriber} ribu subcriber </Text>
                </View>
            </View>
        </View>
    )
}

export default FlexBox;