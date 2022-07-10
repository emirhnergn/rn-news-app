import { View,Text, StyleSheet,Dimensions, TextInput, TouchableOpacity, Alert } from "react-native"
import { useState } from "react";
import { loginHandle , registerHandle } from "../firebaseDB/firebase";
const {width, height} = Dimensions.get('window');


export default function Register({navigation}) {
  const [state,setState] = useState({
    mail : '',
    password : '',
    spinner : false,
  })
  const register = async () =>
  {
    setState({...state,spinner:true})
    const user = await registerHandle(state.mail,state.password)
    if (user != undefined)
    {
      navigation.navigate('Home')
      Alert.alert('Register Success')
    }
    
  }
  return (
    <View style={{ flex: 1}}>
        <View style={{alignItems:'center', marginTop:50}}>
          <Text style={{fontSize: 50, fontWeight:"bold"}}>News App</Text>
        </View>
        <View>
          <TextInput style={{fontSize: 50, marginTop:20}} placeholder="E-Mail" />
          <TextInput style={{fontSize: 50, marginLeft:10, height:60, marginRight:10, marginBottom:20,
          paddingLeft:12, borderWidth:2, borderColor:"red"}}
          onChangeText={(mail) => setState({...state,mail})}
          autoCorrect={false}
          value = {state.mail}
          keyboardType="email-address"
          />
          <TextInput style={{fontSize: 50}} placeholder="Password" />
          <TextInput style={{fontSize: 50, marginLeft:10, height:60 , marginRight:10, marginBottom:20,
          borderWidth:2,paddingLeft:12, borderColor:"red"}}
          secureTextEntry={true}
          onChangeText={(password) => setState({...state,password})}
          autoCorrect={false}
          value = {state.password}
          />
          <TouchableOpacity onPress={() => register()}>
            <View style={{marginLeft:10, marginRight:10, borderWidth:2, borderColor:"red",alignItems:'center', justifyContent:"center", padding:15, borderRadius:25}}>
              <Text style={{fontSize:30,fontWeight:"bold"}} >Register</Text>
            </View>
          </TouchableOpacity>
        </View>
        
    </View>
  )
}
