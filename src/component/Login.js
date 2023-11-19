import { Link } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Image } from 'react-native'
import { Linking } from 'react-native'
const Login = () => {

  const handleLogin = () => {
    Linking.openURL('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=AVQVeywqFkr1ak4o1SuIAxsYwwpRFCaJW1DhzHtN9R-9WhQwxh1-lZygpQujiilfxGOxg5dOstPmOw&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S554584068%3A1700414720706665&theme=glif')
  }  
  const handleFacebook = () => {
    Linking.openURL('https://www.facebook.com/?locale=vi_VN')
  }

  return (
    <View>
        <Text style ={{textAlign:'center',justifyContent:'center',fontSize:18,fontFamily:'inter',marginTop:20,marginHorizontal:20
        }}>Hãy đăng nhập để backup  [Từ của bạn] vào tài khoản đăng nhập hoặc tải [Từ của bạn] về từ tài khoản đăng nhập</Text>
        <Pressable onPress={handleLogin} style={{flexDirection:'row',backgroundColor:'red',borderRadius:15,minHeight:55,width:'78%',marginHorizontal:45,textAlign:'center',justifyContent:'center',paddingTop:18,marginTop:60}}>
            <Image source={require('/assets/g.png')} style={{width:25,height:25,marginLeft:-30}}></Image>
            <Text style={{fontWeight:'bold',fontSize:19,fontFamily:'Roboto',color:'white',paddingLeft:15}}>Đăng Nhập bằng Google</Text>
        </Pressable>
        <Pressable onPress={handleFacebook}> <Text  style={{color:'#0052B4',marginTop:190,textAlign:'center',fontSize:19,fontWeight:'bold'}}>Facebook</Text> </Pressable>
        <Text style ={{textAlign:'center',justifyContent:'center',fontSize:17,fontFamily:'inter',marginTop:30,marginHorizontal:5
        }} >Không khuyến khích đăng nhập bằng facebook vì chức năng đăng nhập bằng facebook sẽ bị gỡ bỏ. Khi đó bạn sẽ không thể khôi phục từ vựng đã lưu </Text>
    </View>

  )
}

export default Login