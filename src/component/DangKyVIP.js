import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Linking } from 'react-native'

const DangKyVIP = () => {
  const items = [
    {
      id: 1,
      title: "Thành viên VIP mãi mãi",
      price: "295.000đ",
      time: "Thanh toán một lần dùng mãi mãi",
    },
    {
      id: 2,
      title: "3 Tháng",
      price: "65.000đ",
      time: "Thanh toán hằng quý",
    },
    {
      id: 3,
      title: "1 Năm",
      price: "195.000đ",
      time: "Thanh toán hằng năm",
    },
  ];
  const handlePress = () => {
    Linking.openURL("https://play.google.com/store/apps/details?id=com.vn.dic.e.v.ui&hl=vi&gl=US");
  };
  const renderItems = items.map((item) => (
    <View style={styles.itemContainer} key={item.id}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={{fontSize:17}}>{item.time}</Text>
      <Pressable onPress={handlePress} style={styles.itemButton}>
        <Text style={styles.buttonText}>Đăng ký VIP</Text>
      </Pressable>
    </View>
  ));

  return (
    <View style={{ backgroundColor:'#EEEEEE', minHeight: "100%",position:'fix' }}>
      <View style={{backgroundColor:'#EEEEEE', marginTop: 30, marginHorizontal: 10, marginBottom: 20 }}>
        <Text style={styles.infoText}>
          * Được sử dụng toàn bộ gói từ vựng VIP luyện thi và VIP sách giáo
          khóa
        </Text>
        <Text style={styles.infoText}>* Quảng cáo sẽ được gỡ bỏ</Text>
        <Text style={styles.infoText}>
          * Cho phép sao lưu toàn bộ mục [Từ của bạn], từ đã lưu sẽ được khôi
          phục đầy đủ khi bạn đổi máy mới hoặc cài lại phần mềm (tài khoản
          thường chỉ khôi phục tối đa khoản 300 từ vựng).
        </Text>
        <Text style={styles.infoText}>
          * Cho phép xem hình ảnh minh hoạ khi tra từ điển.
        </Text>
        <Text style={styles.infoText}>
          * Truy cập toàn bộ chức năng màn hình.
        </Text>
      </View>

      <Text style={styles.vipHeader}>Khôi phục VIP</Text>

      {renderItems}
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    fontWeight: "650",
    fontSize: 18,
    backgroundColor:'#EEEEEE',
    lineHeight: 28,
  },
  vipHeader: {
    color: "#3B8CEC",
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "550",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "white",
    marginHorizontal: 30,
    height: 150,
    width: "85%",
    marginBottom: 15,
    padding: 10,
  },
  itemTitle: {
    fontSize: 19,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 19,
    color:'#E86A0F',
    fontWeight: "bold",
  },
  itemButton: {
    marginTop:10,
    backgroundColor: "#E86A0F",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:70,
    borderRadius:30,
    minHeight:'1%',
    width:'50%'
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    minHeight:'1%',

  },
});

export default DangKyVIP;
