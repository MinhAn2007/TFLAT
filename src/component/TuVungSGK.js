import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet,FlatList,Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const TuVungSGK = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
    console.log('Go back');
  };

const data =[

    {
        id:3,
        source:require('/assets/3.png'),
        title:'Lớp 3',
        content:'Tập hợp từ vựng Lớp 3 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
    },
    {
        id:4,
        source:require('/assets/4.png'),
        title:'Lớp 4',
        content: 'Tập hợp từ vựng Lớp 4 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.',
    },
    {
        id:5,
        source:require('/assets/5.png'),
        title:'Lớp 5',
        content: 'Tập hợp từ vựng Lớp 5 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.',
    },
    {
        id:6,
        source:require('/assets/12.png'),
        title:'Lớp 6',
        content:'Tập hợp từ vựng Lớp 6 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
    },
    {
        id:7,
        source:require('/assets/a6.png'),
        title:'Lớp 7',
        content:'Tập hợp từ vựng Lớp 7 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
    },
    {
        id:8,
        source:require('/assets/7.png'),
        title:'Lớp 8',
        content:'Tập hợp từ vựng Lớp 8 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
    },
    {
        id:9,
        source:require('/assets/8.png'),
        title:'Lớp 9',
        content:'Tập hợp từ vựng Lớp 9 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
    },
    {
        id:10,
        source:require('/assets/9.png'),
        title:'Lớp 10',
        content:'Tập hợp từ vựng Lớp 10 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
    },
    {
        id:11,
        source:require('/assets/10.png'),
        title:'Lớp 11',
        content:'Tập hợp từ vựng Lớp 11 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.'
    },
    {
        id:12,
        source:require('/assets/11.png'),
        title:'Lớp 12',
        content: 'Tập hợp từ vựng Lớp 12 theo sách giáo khoa chuẩn. Từ vựng được thiết kế chi tiết theo từng bài học với hình ảnh minh họa và âm thanh chuẩn.\n \n Gói từ vựng này rất phù hợp với những bạn chuẩn bị thi tốt nghiệp, thi đại học. Đây là gói tập hợp những từ vựng hay xuất hiện trong các đề thi.'
    },

]

  const renderItem = ({item}) => {
    return(
    <View style={{backgroundColor:'white',paddingLeft:15,marginTop:12,paddingTop:15,marginHorizontal:15,borderRadius:20,paddingBottom:20}}>
        <Image style={{width:100,height:70}} source={item.source}></Image>
       <View style={{marginLeft:110,marginTop:-70,marginBottom:40}}>
       <Text style={{fontWeight:'bold',marginBottom:5,fontSize:15}}>{item.title}</Text>

        <Text style={{fontWeight:'650',fontSize:13,color:'gray'}}>Hoàn thành: 0%</Text>
       </View>
       <Text style={{fontWeight:'650',fontSize:13,color:'gray',marginRight:10}} >{item.content}</Text>

        <Pressable style={{backgroundColor:'#E86A0F',minHeight:40,width:'40%',marginHorizontal:100,marginTop:10,borderRadius:30}}><Text style={{textAlign:'center',paddingTop:10,fontWeight:'blod',color:'white'}}>Mua</Text></Pressable>
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
       <View style={{marginHorizontal:15}}><Text style={{marginTop:30,fontWeight:'200',textAlign:'left',fontSize:18,justifyContent:'center',color:'white',marginBottom:35}}>Các gói từ vựng VIP được biên soạn theo sách giao khoa chuẩn</Text>
       <Text style={styles.textSub}>*  Có hình ảnh minh họa, phát âm chuẩn.</Text><Text style={styles.textSub} >*  Đặc biệt có game giúp bạn học từ vựng nhanh.</Text>
       <Text style={styles.textSub}>*  Gói từ vựng đã mua sẽ được duy trì vĩnh viễn theo tài khoản email khi cài đặt phần mềm này.</Text>
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

export default TuVungSGK;
