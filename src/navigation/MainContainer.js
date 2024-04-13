import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import ChatList from '../screens/ChatList';
import ChatDetail from '../screens/ChatDetail';
import ProfileInformation from '../screens/ProfileInformation';

const Stack = createNativeStackNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ChatList" component={ChatList} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatDetail} />
        <Stack.Screen name="Profile" component={ProfileInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer