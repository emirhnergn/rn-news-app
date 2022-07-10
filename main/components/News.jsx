import { View, Text, Image,Dimensions  } from "react-native"
import { useEffect } from "react"
import { getDatabaseHandle } from "../firebaseDB/firebase"
import { useState } from "react"
import { get, child } from "firebase/database";
const {width, height} = Dimensions.get('window');

export default function News() {
    const [news, setNews] = useState([])
    useEffect(async () => {
        const db = await getDatabaseHandle();
        get(child(db, 'News')).then((snapshot) => {
            if (snapshot.exists()) {
                setNews(snapshot.val())
            } else {
                Alert.alert("database error occured")
            }})
    }, [])

    return (
    <View>
        <Text style={{fontSize:50}}>News!</Text>
        {news !== [] ? Object.entries(news).map(([key,value]) =>
        {
            return (
                <View style={{marginTop:20}}  key={key}>
                    <Text style={{fontSize:25}}>{value.name}</Text>
                    <Image style={{width:width-40, height:width/2}} source={{uri:value.photo}}/>
                    <Text>{value.detail}</Text>
                </View>
            )
        }) : null}
    </View>
    )
}
