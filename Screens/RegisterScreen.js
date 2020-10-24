import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React, { useState } from 'react';
import { TextInput, Text, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconForMail from 'react-native-vector-icons/AntDesign'
import { Card, Button, Input } from 'react-native-elements';
import IconForEntypo from 'react-native-vector-icons/Entypo';

const RegisterScreen = ({navigation}) => {

  const [name, onChangeName] = useState('Name');
  const [email, onChangeEmail]= useState('email');
  const [password, onChangePassword] = useState('Password');
  const [signUpData, setSignUpData] = useState({});
  console.log('---------------LoginData--------------', signUpData);

  return (
    <View style={{ paddingTop: '20%' }}>
    <View style={{ paddingLeft: '3.5%', paddingRight: '3.5%', alignItems: 'center' }}>
        <Text h2>Sign Up</Text>
    </View>
    <Card containerStyle={{ paddingTop: '5%', borderColor: 'blue' }}>
        <Card.Title>
            <IconForEntypo
                name="add-user"
                size={60}
                color="black"
            />
        </Card.Title>
        <View style={{ paddingTop: "4%" }} />
        <Input
            placeholder='pheobe'
            label='Name'
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
            placeholder=' pheobe@domain'
            label='Email'
            leftIcon={
                <IconForMail
                    name='mail'
                    size={24}
                    color='black'
                />
            }
            onChangeText={text => onChangeEmail(text)}
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
            title="Register"
            onPress={() => setSignUpData({ name: name, email: email, password: password })}
        />
        <View style={{ paddingTop: "8%" }} />
        <Text style={{ paddingLeft: "15%" }}>If you are a existing user please</Text>
        <Text onPress={()=>navigation.navigate("Login")} style={{ paddingLeft: "38%", color: 'blue' }}>Sign In</Text>
    </Card>
</View>
  );
}

export default RegisterScreen;