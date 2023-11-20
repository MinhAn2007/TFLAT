import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet,FlatList,Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const TuVungSGKmoi = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
    console.log('Go back');
  };

const data =[

    {
        id:3,
        source:require('/assets/3new.png'),
        title:'Lớp 2',
    },
    {
        id:4,
        source:require('/assets/4new.png'),
        title:'Lớp 3',
    },
    {
        id:5,
        source:require('/assets/5new.png'),
        title:'Lớp 4',
    },
    {
        id:6,
        source:require('/assets/6new.png'),
        title:'Lớp 5',
    },
    {
        id:7,
        source:require('/assets/7new.png'),
        title:'Lớp 6',
    },
    {
        id:8,
        source:require('/assets/8new.png'),
        title:'Lớp 7',
    },
    {
        id:9,
        source:require('/assets/9new.png'),
        title:'Lớp 8',
    },
    {
        id:10,
        source:require('/assets/10new.png'),
        title:'Lớp 9',
    },
    {
        id:11,
        source:require('/assets/11new.png'),
        title:'Lớp 10',
    },
    {
        id:12,
        source:require('/assets/12new.png'),
        title:'Lớp 11',
    },

]

  const renderItem = ({item}) => {
    return(
    <View style={{backgroundColor:'white',paddingLeft:15,marginTop:12,paddingTop:15,marginHorizontal:15,borderRadius:20,paddingBottom:20}}>
        <Image style={{width:90,height:70}} source={item.source}></Image>
       <View style={{marginLeft:110,marginTop:-70,marginBottom:40}}>
       <Text style={{fontWeight:'bold',marginBottom:5,fontSize:18}}>{item.title}</Text>

        <Text style={{fontWeight:'650',fontSize:13,color:'gray'}}>Hoàn thành: 0%</Text>
       </View>
       <Text style={{fontWeight:'650',fontSize:13,color:'gray',marginRight:10}} >{item.content}</Text>

        <Pressable style={{backgroundColor:'#0052B4',minHeight:40,width:'50%',marginHorizontal:80,marginTop:20,borderRadius:30}}><Text style={{textAlign:'center',paddingTop:10,fontWeight:'blod',color:'white'}}>Luyện tập</Text></Pressable>
    </View>)
  }
  return (
    <ImageBackground
      source={require('/assets/screen.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.separator}></View>
      </View>     
      
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        >
        </FlatList>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginTop:80,
    marginLeft:-20
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 10,
    alignSelf: 'center',
  },
  textSub:{
    fontWeight:'200',
    textAlign:'left',
    fontSize:18,
    justifyContent:'center',
    color:'white',
  }
});

export default TuVungSGKmoi;
