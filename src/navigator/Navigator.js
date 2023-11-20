import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import React from "react";
import Main from "../component/Main";
import Login from "../component/Login";
import HienThiManHinhKhoa from "../component/HienThiTrenManHinhKhoa";
import TuVungVIPLuyenThi from "../component/TuVungVIPLuyenThi";
import DangKyVipScreen from "../component/DangKyVipScreen";
import TuDaTraScreen from "../component/TuDaTraScreen";
import TuVungSGK from "../component/TuVungSGK";
import TuVungSGKmoi from "../component/TuVungSGKmoi";
import TransScreen from "../component/TransScreen";
import TuDienVietAnhScreen from "../component/TuDienVietAnhScreen";
import UngDungHocTiengAnhKhacScreen from "../component/UngDungHocTiengAnhKhacScreen";
import CaiDatScreen from "../component/CaiDatScreen";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DangKyVipScreen"
          component={DangKyVipScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TuDaTraScreen"
          component={TuDaTraScreen}
          options={{ headerShown: false }}
        />
              <Stack.Screen
          name="CaiDatScreen"
          component={CaiDatScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="UngDungHocTiengAnhKhacScreen"
          component={UngDungHocTiengAnhKhacScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TuDienVietAnhScreen"
          component={TuDienVietAnhScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            title: "Đăng nhập",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#0052B4" },
            headerTintColor: "white",
          }}
        />
<Stack.Screen
          name="TransScreen"
          component={TransScreen}
          options={{
            headerShown: true,
            title: "Đăng nhập",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#0052B4" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="HienThiManHinhKhoa"
          component={HienThiManHinhKhoa}
          options={{
            headerShown: true,
            title: "Hiển thị từ vựng trên màn hình khóa",
            headerStyle: {
              backgroundColor: "#176778",
              marginLeft: 0,
              marginRight: 0,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 16,
            },
            headerRight: null,
            headerTruncatedBackTitle: "",
            headerRightContainerStyle: {
              marginLeft: 20,
            },
          }}
        />
        <Stack.Screen
          name="TuVungVIPLuyenThi"
          component={TuVungVIPLuyenThi}
          options={{
            headerShown: true,
            title: "Từ vựng VIP luyện thi",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerBackground: () => (
              <Image
                style={{ flex: 1, resizeMode: 'cover', width: '100%' }}
                source={require('/assets/headerScreen.jpg')}
              />
            ),
          }}
        />
          <Stack.Screen
          name="TuVungSGK"
          component={TuVungSGK}
          options={{
            headerShown: true,
            title: "Từ vựng VIP SGK",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerBackground: () => (
              <Image
                style={{ flex: 1, resizeMode: 'cover', width: '100%' }}
                source={require('/assets/headerScreen.jpg')}
              />
            ),
          }}
        />
         <Stack.Screen
          name="TuVungSGKmoi"
          component={TuVungSGKmoi}
          options={{
            headerShown: true,
            title: "Từ vựng VIP SGK mới",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerBackground: () => (
              <Image
                style={{ flex: 1, resizeMode: 'cover', width: '100%' }}
                source={require('/assets/headerScreen.jpg')}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
