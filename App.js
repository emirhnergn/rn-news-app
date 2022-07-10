import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './main/components/Login';
import Main from './main/pages/Main';
import Register from './main/components/Register';
import { createContext, useState } from 'react';
import { LogBox } from 'react-native';
import SiteContext from './main/context/SiteContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "");
  
  const data = {
    user,
    setUser
  }

  return (
    <SiteContext.Provider value={{data}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </SiteContext.Provider>
  );
}

export default App;