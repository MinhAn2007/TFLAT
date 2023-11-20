import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet,FlatList,Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const TuVungVIPLuyenThi = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
    console.log('Go back');
  };

const data =[
    {
       id:1, 
        source:require('/assets/oxford.png'),
        title:'Từ vựng Oxford',
        content:'Tập hợp những từ vựng thường gặp trong giao tiếp theo Oxford. Bộ từ gồm 3000 từ vựng quan trong đã được chọn lựa bởi một nhóm 70 chuyên gia của Oxford. Theo Oxford nếu bạn học hết bộ từ này thì bạn sẽ giao tiếp được tiếng Anh ở mức độ cơ bản.'
    },
    {
        id:2,
        source:require('/assets/toiec.png'),
        title:'Từ vựng luyện thi TOIEC',
        content:'Tập hợp những từ vựng hay xuất hiện trong các đề thi TOEIC. Bộ từ vựng luyện thi TOEIC gồm 600 từ vựng tiếng Anh thiết yếu nhất sẽ là nền tảng để giúp bạn đạt được những điểm cao trong kì thi TOEIC.'
    },
    {
        id:3,
        source:require('/assets/ietls.png'),
        title:'Từ vựng luyện thi IELTS',
        content:'Tập hợp những từ vựng hay xuất hiện trong các đề thi IELTS. Bộ từ vựng IELTS gồm 900 từ vựng tiếng Anh thiết yếu nhất đã được chọn lọc rất kỹ lưỡng để giúp bạn ghi điểm cao trong kì thi IELTS.'
    },
    {
        id:4,
        source:require('/assets/thpt.png'),
        title:'Từ vựng Luyện thi Tốt Nghiệp THPT',
        content: '*  Bao gồm tất cả những từ, cụm từ và thành ngữ hay gặp trong các đề thi tốt nghiệp Trung học Phổ thông.\n*  Các bài luyện tập và trò chơi sẽ giúp bạn học thuộc từ vựng một cách nhanh chóng và dễ dàng',
    },
    {
        id:5,
        source:require('/assets/daihoc.png'),
        title:'Từ vựng Luyện thi Đại học',
        content: '*   Bao gồm tất cả những từ, cụm từ và thành ngữ hay gặp trong đề thi đại học\n*  Các bài luyện tập và trò chơi sẽ giúp bạn học thuộc từ vựng một cách nhanh chóng và dễ dàng',
    },
    {
        id:6,
        source:require('/assets/toefl.png'),
        title:'Từ vựng luyện thi TOEFL',
        content:'Tập hợp những từ vựng hay xuất hiện trong các đề thi TOEFL. Bộ từ vựng TOEFL gồm 900 từ vựng thiết yếu nhất đã được chọn lọc rất kỹ lưỡng để giúp bạn ghi điểm cao trong kì thi TOEFL.'
    },
    {
        id:7,
        source:require('/assets/toefl.png'),
        title:'Từ vựng luyện thi TOEFL',
        content:'Tập hợp những từ vựng hay xuất hiện trong các đề thi TOEFL. Bộ từ vựng TOEFL gồm 900 từ vựng thiết yếu nhất đã được chọn lọc rất kỹ lưỡng để giúp bạn ghi điểm cao trong kì thi TOEFL.'
    },
    {
        id:8,
        source:require('/assets/sat.png'),
        title:'Từ vựng luyện thi SAT',
        content:'Tập hợp những từ vựng hay xuất hiện trong các đề thi SAT. Bộ từ vựng SAT gồm 900 từ vựng thiết yếu nhất đã được chọn lọc rất kỹ lưỡng để giúp bạn ghi điểm cao trong kì thi SAT.'
    },
    {
        id:9,
        source:require('/assets/sinhvien.png'),
        title:'Từ vựng Xin việc',
        content:'Tập hợp những từ vựng hay dùng khi trả lời phỏng vấn xin việc. Bộ từ Xin việc gồm 300 từ vựng tiếng Anh thiết yếu nhất sẽ là nền tảng để giúp bạn có được 1 CV đẹp và có được công việc mơ ước.'
    },
    {
        id:10,
        source:require('/assets/vanphong.png'),
        title:'Từ vựng Văn phòng',
        content:'Tập hợp những từ vựng hay dùng trong công việc văn phòng. Bộ từ vựng Văn phòng gồm 550 từ cần thiết, cơ bản và gần gủi nhất đã được chọn lọc rất kỹ lưỡng để giúp bạn giao tiếp hiệu quả ở nơi làm việc của bạn.'
    },
    {
        id:11,
        source:require('/assets/socap.png'),
        title:'Từ vựng Sơ cấp',
        content:'Tập hợp những từ vựng sơ cấp. Bộ từ giao tiếp căn bản gồm 1000 từ vựng phù hợp cho những bạn mới học tiếng Anh hoặc đã mất căn bản.'
    },
    {
        id:12,
        source:require('/assets/trungcap.png'),
        title:'Từ vựng Trung cấp',
        content:'Tập hợp những từ vựng trung cấp. Bộ từ giao tiếp trung cấp gồm 800 từ vựng tiếng Anh trình độ trung cấp giúp bạn có thể tự tin hơn trong giao tiếp với đồng nghiệp hoặc cấp trên.'
    },
    {
        id:13,
        source:require('/assets/caocap.png'),
        title:'Từ vựng Cao cấp',
        content:'Tập hợp những từ vựng cao cấp. Bộ từ giao tiếp nâng cao gồm 600 từ vựng tiếng Anh trình độ nâng cao giúp bạn có thể tỏa sáng và tự tin hơn giao tiếp hoặc thuyết trình trước đám đông.'
    },
]

  const renderItem = ({item}) => {
    return(
    <View style={{backgroundColor:'white',paddingLeft:15,marginTop:12,paddingTop:15,marginHorizontal:15,borderRadius:20,paddingBottom:20}}>
        <Image style={{width:100,height:80}} source={item.source}></Image>
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
       <View style={{marginHorizontal:15}}><Text style={{marginTop:30,fontWeight:'200',textAlign:'left',fontSize:18,justifyContent:'center',color:'white',marginBottom:25}}>Các gói từ vựng VIP được chọn lọc và biên soạn cần thận theo từng chủ đề, nội dung sẽ chất lượng hơn hẳn so với các danh sách từ vựng ở mục [Từ vựng quan trọng].</Text>
       <Text style={styles.textSub}>*  Có hình ảnh minh họa, phát âm chuẩn.</Text><Text style={styles.textSub} >*  Có ví dụ song ngữ.</Text>
       <Text style={styles.textSub}>*  Đặc biệt có game giúp bạn học từ vựng nhanh</Text>
       <Text style={styles.textSub}>*  Gói từ vựng đã mua sẽ được duy trì vĩnh viễn theo tài khoản email khi cài đặt phần mềm này.</Text>
       <Text style={styles.textSub}>*  Mỗi gói từ vựng đã mua sẽ chia thành nhiều bài học nhỏ, mỗi bài sẽ có một số lượng từ vựng nhất định theo từng chủ đề giúp bạn dễ dàng luyện tập.</Text>
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
    fontSize:17,
    justifyContent:'center',
    color:'white',
  }
});

export default TuVungVIPLuyenThi;
