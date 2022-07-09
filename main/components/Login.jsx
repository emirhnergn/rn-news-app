import { View,Text, StyleSheet,Dimensions, TextInput } from "react-native"
const {width, height} = Dimensions.get('window');

export default function Login() {
  return (
    <View style={{ flex: 1}}>
        <View style={{alignItems:'center', marginTop:50}}>
          <Text style={{fontSize: 50, fontWeight:"bold"}}>News App</Text>
        </View>
        <View>
          <TextInput style={{fontSize: 50, marginTop:20}} placeholder="Username" />
          <TextInput style={{fontSize: 50, marginLeft:10, height:60, marginRight:10, marginBottom:20,
          paddingLeft:12, borderWidth:2, borderColor:"red"}}
          />
          <TextInput style={{fontSize: 50}} placeholder="Password" />
          <TextInput style={{fontSize: 50, marginLeft:10, height:60 , marginRight:10, marginBottom:20,
          borderWidth:2,paddingLeft:12, borderColor:"red"}}
          secureTextEntry={true}
          />
          <View style={{marginLeft:10, marginRight:10, borderWidth:2, borderColor:"red",alignItems:'center', justifyContent:"center", padding:15, borderRadius:25}}>
            <Text style={{fontSize:30,fontWeight:"bold"}} >Login</Text>
          </View>
        </View>
    </View>
  )
}
