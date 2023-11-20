import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, TouchableOpacity, Modal } from 'react-native';

const HienThiTrenManHinhKhoa = () => {
  const circlePosition = useRef(new Animated.Value(0)).current;
  const [isVipPopupVisible, setVipPopupVisible] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      Animated.event([null, { dx: circlePosition }])(event, gesture);
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > 120) {
        setVipPopupVisible(true);
      } else {
        Animated.spring(circlePosition, {
          toValue: 0,
          friction: 5,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const closeVipPopup = () => {
    setVipPopupVisible(false);
    Animated.spring(circlePosition, {
      toValue: 0,
      friction: 5,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hiển thị từ vựng đã tra, từ của bạn đã lưu lên mà hình khóa của điện thoại, giúp bạn học từ vựng mỗi khi mở điện thoại
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hiển thị từ vựng trên màn hình khóa</Text>
        <View style={styles.track}>
          <Animated.View
            style={[
              styles.circle,
              {
                transform: [
                  {
                    translateX: circlePosition.interpolate({
                      inputRange: [-200, 0, 200],
                      outputRange: [-85, 0, 85],
                    }),
                  },
                ],
              },
            ]}
            {...panResponder.panHandlers}
          />
        </View>
        <Text style={styles.vipInfo}>Chỉ thành viên VIP mới có thể truy cập mục này</Text>
      </View>
      <Modal transparent={true} animationType="slide" visible={isVipPopupVisible} onRequestClose={closeVipPopup}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Chỉ thành viên VIP mới có thể truy cập mục này</Text>
            <TouchableOpacity onPress={closeVipPopup}>
              <Text style={styles.modalButton}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    marginTop: 10,
    minHeight: 90,
    padding: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,

  },
  track: {
    marginTop: -18,
    width: 50,
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 15,
    overflow: 'hidden',
    marginLeft:280
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    top: -5,
  },
  vipInfo: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
    marginTop: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default HienThiTrenManHinhKhoa;
