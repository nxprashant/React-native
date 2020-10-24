import React from 'react'
import {View,Text, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const DisplayLogin=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>You are logged in</Text>
        <Button title="Go back" onPress={() => navigation.navigate('Login')} />
      </View>
    )
}
export default DisplayLogin