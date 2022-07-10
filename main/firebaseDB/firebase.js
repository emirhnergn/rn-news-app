import { initializeApp } from "firebase/app";
import * as config from "../../ENVIRONMENT"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, get, child } from "firebase/database";

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    databaseURL: config.databaseURL
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const registerHandle =  async (email, password) =>
{
  try {
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    Alert.alert(error.message)
  }
    
}

export const loginHandle =  async (email, password) =>
{
  try {
    const {user} = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    Alert.alert(error.message)
  }
}

export const signOutHandle =  async () =>
{
  try {
    await signOut(auth)
  } catch (error) {
    Alert.alert(error.message)
  }
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    await AsyncStorage.setItem('user', JSON.stringify(user.uid))
  } else{
    await AsyncStorage.removeItem('user')
  }
})

export const getDatabaseHandle = async () => {
  const database = ref(getDatabase(app))
  return database

}


export default app;