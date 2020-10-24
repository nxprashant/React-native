import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button, Input } from 'react-native-elements';
import IconForEvilIcons from 'react-native-vector-icons/EvilIcons';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const LoginScreen=({navigation})=>{
  const [name, onChangeName] = useState('Name');
  const [password, onChangePassword] = useState('Password');
  const [loginData, setLoginData] = useState({});
  console.log('---------------LoginData--------------', loginData);
  return (
    <View style={{ paddingTop: '20%' }}>
      <View style={{ paddingLeft: '3.5%',paddingRight: '3.5%', alignItems: 'center' }}>
      <Text h2>Login</Text>
      </View>
      <Card containerStyle={{ paddingTop: '5%', borderColor: 'blue' }}>
        <Card.Title>
          <IconForEvilIcons
            name='user'
            size={100}
            color='black'
          />
        </Card.Title>
        <View style={{ paddingTop: "4%" }} />
        <Input
          placeholder='email@domain'
          label='Email'
          variant=''
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
          onChangeText={text => onChangeName(text)}
        />
        <View style={{ paddingTop: "4%" }} />
        <Input
          placeholder='***'
          label='Password'
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='black'
            />
          }
          onChangeText={text => onChangePassword(text)}
          secureTextEntry={true}
        />
        <Button
          title="Login"
          onPress={() => {setLoginData({ name: name, password: password }); navigation.navigate("LoginDisplay")} }
        />
        <View style={{ paddingTop: "8%" }} />
        <Text style={{ paddingLeft: "15%" }}>If you are not a existing user please</Text>
        <Text onPress={()=>navigation.navigate("Register")} style={{ paddingLeft: "38%", color: 'blue' }}>Sign Up</Text>
      </Card>
    </View>
  );
}

export default LoginScreen;