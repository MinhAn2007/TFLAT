import { useEffect, useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function DangKyVipScreen() {
    const navigation = useNavigation();
    var [data, setData] = useState([]);

    useEffect(() => {
        getAPIDangKyVip()
    }, []);

    const getAPIDangKyVip = async () => {
        const url = "http://localhost:3000/dataDangKyVip";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="white" style={{ left: 20 }} />
                    </Pressable>
                <Text style={{ fontSize: 20, color: 'white', left: 75 }}>Đăng ký thành viên VIP</Text>
            </View>

            <View style={{ width: '90%', left: 20, marginBottom: 20}}>
                <Text style={styles.text}>* Được sử dụng toàn bộ gói từ vựng VIP luyện thi và VIP sách giáo kháo</Text>
                <Text style={styles.text}>* Quảng cáo sẽ được gỡ bỏ</Text>
                <Text style={styles.text}>* Cho phép sao lưu toàn bộ mục [Từ của bạn], từ đã lưu sẽ được khôi phục đầy đủ khi bạn đổi máy mới hoặc cài lại phần mềm (tài khoản
                    thường chỉ khôi phục tối đa khoản 300 từ vựng)</Text>
                <Text style={styles.text}>* Cho phép xem hình ảnh minh hoạ khi tra từ điển.</Text>
                <Text style={styles.text}>* Truy cập toàn bộ chức năng màn hình.</Text>
            </View>

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, fontWeight: 500, color: 'blue', alignSelf: 'flex-start', left: 20, marginBottom: 20 }}>Khôi phục VIP</Text>

                {
                    data.map((item) =>
                        <View key={item.id} style={styles.contentVip}>
                            <Text style={{ fontSize: 20, fontWeight: '500' }}>{item.title}</Text>
                            <Text style={{ fontSize: 20, color: '#E86A0F', fontWeight: '500' }}>{item.price}.000 đ</Text>
                            <Text style={{ fontSize: 15 }}>{item.cycle}</Text>
                            <TouchableOpacity style={styles.btnDangKyVip} onPress={() => Linking.openURL("https://play.google.com/store/apps/details?id=com.vn.dic.e.v.ui&hl=vi&gl=US")}>
                                <Text style={{ fontSize: 18, color: 'white' }}>Đăng ký VIP</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
    },
 
    head: {
        width: '100%',
        height: 60,
        backgroundColor: '#0052B4',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },

    text: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'justify',
    },

    contentVip: {
        width: '80%',
        height: 160,
        backgroundColor: 'white',
        marginBottom: 20,
        paddingTop: 15,
        paddingLeft: 20
    },

    btnDangKyVip: {
        width: 120,
        height: 40,
        backgroundColor: '#E86A0F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        alignSelf: 'center'
    }
});
