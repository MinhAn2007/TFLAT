import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../component/Main";
import Login from "../component/Login";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0052B4',
          },
          headerTitleStyle: {
            color: 'white', 
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true , title : "Đăng nhập", headerTintColor: 'white', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
