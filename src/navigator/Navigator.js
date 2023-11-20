import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../component/Main";
import Login from "../component/Login";
import DangKyVIP from "../component/DangKyVIP";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
      
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
         
          name="Login"
          component={Login}
          
          options={{ headerShown: true , title : "Đăng nhập", headerTitleAlign: 'center',headerStyle:{backgroundColor:'#0052B4'},headerTintColor:'white'}}
          
        />
         <Stack.Screen
         
         name="DangKyVIP"
         component={DangKyVIP}
         options={{ headerShown: true , title : "Đăng ký thành viên VIP", headerTitleAlign: 'center',headerStyle:{backgroundColor:'#0052B4'},headerTintColor:'white'}}
         
       />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};
export default Navigator;
