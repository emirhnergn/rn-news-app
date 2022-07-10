import { View, Text, Button } from "react-native"
import { useContext } from "react";
import SiteContext from "../context/SiteContext";
import { signOutHandle } from "../firebaseDB/firebase";
import News from "../components/News";
import { getDatabaseHandle } from "../firebaseDB/firebase";

export default function Main({ navigation }) {
  const {data} = useContext(SiteContext);
  const signout = () => 
  {
    data.setUser("")
    signOutHandle()
  }
  return (
    <View style={{ flex: 1, alignItems:"center"}}>
      {data.user === "" || data.user === undefined ? <Text style={{fontSize:50}}>Please Login to see News!</Text> 
      : <Text style={{fontSize:50, }}>Welcome: {data.user}</Text>}
      {data.user !== "" && data.user !== undefined ? 
      <View>
        <Button
          color = "red"
          title="Sign Out"
          onPress={() => signout()}
        /> 
        <News />
      </View>  
      :
      <View style={{width:"90%",margin:20,alignItems: 'center', justifyContent: 'center' }}>
          <Button
            color="red"
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
          />
          <View style={{margin:10}}/>
          <Button
          title="Go to Register"
          onPress={() => navigation.navigate('Register')}
          />
          <View style={{margin:10}}/>
        </View>}
    </View>
  );
  
  
}
