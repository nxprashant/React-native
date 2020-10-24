import React from 'react'
import {ImageBackground, Image, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const SplashScreen=({navigation})=>{
  setTimeout(()=>{
    navigation.replace('Login');
  },3000);
  return(
    <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', backgroundColor:'#808080'}}>  
    
      <Image style={{height:300,width:300,alignItems: 'center', justifyContent:'center',}}
      source={require('../assets/images/success.png')}>
      </Image>
    
    </View>
  )
}
export default SplashScreen;