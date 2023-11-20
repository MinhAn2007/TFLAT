import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../component/Main";
import Login from "../component/Login";
import DangKyVIP from "../component/DangKyVIP";
import HienThiManHinhKhoa from "../component/HienThiTrenManHinhKhoa";

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
<Stack.Screen
  name="HienThiManHinhKhoa"
  component={HienThiManHinhKhoa}
  options={{
    headerShown: true,
    title: "Hiển thị từ vựng trên màn hình khóa",
    headerStyle: {
      backgroundColor: '#176778',
      marginLeft: 0,
      marginRight: 0,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 16,
    },
    headerRight: null,
    headerTruncatedBackTitle: '',
    headerRightContainerStyle: {
      marginLeft: 20,
    },
  }}
/>




      </Stack.Navigator>
      
    </NavigationContainer>
  );
};
export default Navigator;
