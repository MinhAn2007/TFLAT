import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, CheckBox, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import RadioGroup from 'react-native-radio-buttons-group';

export default function CaiDatScreen() {
    var [data, setData] = useState([]);

    const [isSelected, setSelection] = useState(false);

    const [selectedId, setSelectedId] = useState();

    const [selectedId2, setSelectedId2] = useState();

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Chậm hơn',
            value: 'Chậm hơn'
        },
        {
            id: '2',
            label: 'Chậm',
            value: 'Chậm'
        },

        {
            id: '3',
            label: 'Bình thường',
            value: 'Bình thường'
        }
    ]), []);

    const radioButtons2 = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Anh Anh',
            value: 'Anh Anh'
        },
        {
            id: '2',
            label: 'Anh Mỹ',
            value: 'Anh Mỹ'
        },

    ]), []);


    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Ionicons name="arrow-back" size={30} style={{ color: 'white', left: 20 }} />
                <Text style={{ fontSize: 20, color: 'white', left: 40 }}>Cài đặt</Text>
            </View>

            <View style={{ width: '90%', height: 'auto', marginBottom: 20, backgroundColor: 'white', padding: 10, left: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                    <View style={{ width: '65%', flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="circle" size={40} style={{ color: '#1A5928', left: 10 }} />
                        <Feather name="clock" size={22} style={{ color: 'white', left: '-18px' }} />
                        <Text style={styles.text}>Nhắc nhở học từ vựng</Text>
                    </View>

                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ width: 25, height: 25, left: 80 }}
                    />
                </View>

                <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', margiBottom: 50 }}>
                    <View style={{ width: '65%', flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={styles.text}>Thư mục nhắc nhở</Text>
                    </View>

                    <Text style={{ width: "35%", fontSize: 16, fontWeight: 600, left: 5 }}>Tất cả thư mục</Text>
                </View>

                <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '65%', flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={styles.text}>Số lần trong ngày</Text>
                    </View>

                    <Text style={{ width: "35%", fontSize: 16, fontWeight: 600, left: 90 }}>10</Text>
                </View>

                <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '65%', flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={styles.text}>Thời điểm bắt đầu</Text>
                    </View>

                    <Text style={{ width: "35%", fontSize: 16, fontWeight: 600, left: 70 }}>07:00</Text>
                </View>

                <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '65%', flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={styles.text}>Thời điểm dừng</Text>
                    </View>

                    <Text style={{ width: "35%", fontSize: 16, fontWeight: 600, left: 70 }}>21:00</Text>
                </View>

                <View style={{ height: 170, width: '120%' }}>

                    <Text style={{ ...styles.text, height: 40 }}>Ngày nhắc trong tuần</Text>

                    <Text style={{ height: 40, margin: 10, width: '40%', paddingLeft: 15, fontSize: 16, fontWeight: 600, backgroundColor: '#32B2AA', left: 20, color: 'white' }} >2, 3, 4, 5, 6, 7, CN</Text>

                    <Text style={{ ...styles.text, marginBottom: 10 }}>Bạn có thể không nhận được lời nhắc khi điện thoại
                        đang ở chế độ tiết kiệm pin</Text>
                    <Text style={styles.text}>Bạn sẽ không nhận được nhắc nhở nếu bạn không mở
                        app trong 30 ngày</Text>
                </View>


            </View>


            <View style={{ width: '90%', height: 'auto', marginBottom: 20, backgroundColor: 'white', padding: 10, left: 20 }}>
                <Text style={{ ...styles.text, padding: 10 }}>Báo lỗi hoặc góp ý</Text>
                <Text style={{ ...styles.text, padding: 10 }}>Những câu hỏi thường gặp</Text>
                <Text style={{ ...styles.text, padding: 10 }}>Kiểm tra dữ liệu offline</Text>
            </View>

            <View style={{ width: '90%', height: 'auto', marginBottom: 20, backgroundColor: 'white', left: 20, paddingBottom: 15 }}>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="circle" size={40} style={{ color: '#1A5928', left: 10 }} />
                    <FontAwesome name="volume-up" size={22} style={{ color: 'white', left: '-18px' }} />
                    <Text style={styles.text}>Tốc độ phát âm</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <RadioGroup
                        radioButtons={radioButtons}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                        layout='row'
                    />
                </View>

                <Text style={{ ...styles.text, padding: 10, left: 10 }}>Âm thanh mặc định</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', left: 10 }}>
                    <RadioGroup
                        radioButtons={radioButtons2}
                        onPress={setSelectedId2}
                        selectedId={selectedId2}
                        layout='row'
                    />
                </View>

                <Text style={{ ...styles.text, padding: 10, left: 10 }}>Tự động phát âm khi tra từ</Text>

                <View style={{ flexDirection: 'row', left: 20 }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    <Text>Tự động phát âm</Text>
                </View>

            </View>

            <View style={{ width: '90%', height: 'auto', marginBottom: 20, backgroundColor: 'white', padding: 10, left: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, padding: 10 }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ width: 25, height: 25, marginRight: 20 }}
                    />
                    <Text style={styles.text}>Nhắc nhở học từ vựng</Text>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, padding: 10 }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ width: 25, height: 25, marginRight: 20 }}
                    />
                    <Text style={styles.text}>Tự động dịch khi copy văn bản</Text>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, padding: 10 }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ width: 25, height: 25, marginRight: 20 }}
                    />
                    <Text style={styles.text}>Thêm từ trả lời sai khi luyện tập vào [Từ của bạn]</Text>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, padding: 10 }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ width: 25, height: 25, marginRight: 20 }}
                    />
                    <Text style={styles.text}>Xáo trộn từ vựng khi luyện tập</Text>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, padding: 10 }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ width: 25, height: 25, marginRight: 20 }}
                    />
                    <Text style={styles.text}>Hiển thị nghĩa trong mục [Từ của bạn]</Text>

                </View>
            </View>

            <View style={{ width: '90%', height: 'auto', marginBottom: 20, backgroundColor: 'white', padding: 10, left: 20 }}>
                <Text style={{ ...styles.text, padding: 10, width: '100%' }}>Hiển thị từ vựng trên màn hình khoá</Text>
                <Text style={{ ...styles.text, padding: 10, width: '100%'  }}>Ngôn ngữ dịch màn hình và hình ảnh</Text>
                <Text style={{ ...styles.text, padding: 10 }}>Cài đặt phát âm đọc văn bản</Text>
                <Text style={{ ...styles.text, padding: 10 }}>Thêm từ điển phụ</Text>
                <Text style={{ ...styles.text, paddingLeft: 10, fontSize: 15, width:'100%', color:'#C4C4C4'}}>Anh Anh, Chuyên ngành, Đồng nghĩa, Ngữ pháp</Text>
            </View>

            <View style={{ width: '90%', height: 'auto', marginBottom: 20, backgroundColor: 'white', padding: 10, left: 20 }}>
                <Text style={{ ...styles.text, padding: 10 }}>Chính sách bảo mật</Text>
                <Text style={{ ...styles.text, padding: 10 }}>Đánh giá 5* ủng hộ TFlat</Text>
                <Text style={{ ...styles.text, padding: 10 }}>Chia sẻ đến bạn bè</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },

    head: {
        width: '100%',
        height: 60,
        backgroundColor: '#1A5928',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },

    text: {
        width: '80%',
        fontSize: 16,
        textAlign: 'justify',
    },


});
