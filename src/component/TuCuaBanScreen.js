import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, CheckBox, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

export default function TuCuaBanScreen() {
    const navigation = useNavigation();
    var [data, setData] = useState([]);
    const [isSelected, setSelection] = useState(false);

    var [boolData, setBoolData] = useState(true)

    var [sort, setSort] = useState(true)

    var [boolModal, setBoolModal] = useState(false)

    useEffect(() => {
        getAPIDangKyVip()
    }, [sort]);

    const getAPIDangKyVip = async () => {
        const urlTime = "http://localhost:3000/dataTuCuaBan1";

        const urlAZ = "http://localhost:3000/dataTuCuaBan1?_sort=title&_order=asc";

        const url = sort ? urlTime : urlAZ;

        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }

    const searchAPI = async (text) => {

        const url = `http://localhost:3000/dataTuCuaBan1?q=${text}`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }

    const getAPIDangKyVip2 = async () => {
        const url = "http://localhost:3000/dataTuCuaBan2";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }

    const searchAPI2 = async (text) => {

        const url = `http://localhost:3000/dataTuCuaBan2?q=${text}`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }

    const handleModal = () => {
        setBoolModal(!boolModal)
    }

    const handleSortData = async () => {
        setSort((prevSort) => !prevSort);
    };

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.head1}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={30} style={{ color: 'white', left: 20 }} /></Pressable>
                    <Text style={{ fontSize: 20, color: 'white', left: 40 }}>Từ của bạn ({data.length})</Text>
                    <FontAwesome name="folder-open" size={25} style={{ color: 'white', left: 130 }} />
                    <Ionicons name="reorder-three-outline" size={35} style={{ color: 'white', left: 150 }} onPress={handleModal} />
                </View>

                <View style={styles.head2}>
                    <Pressable
                        onPress={() => {
                            getAPIDangKyVip(),
                                setBoolData(true)
                        }}
                        style={{
                            ...boolData ? styles.buttonPress : styles.button, width: '130px',
                            height: '100%', marginRight: 15, alignItems: 'center'
                        }}
                    >
                        <Text style={styles.text}>TỪ ĐÃ LƯU</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            getAPIDangKyVip2(),
                                setBoolData(false)
                        }} style={{
                            ...boolData ? styles.button : styles.buttonPress, width: '130px',
                            height: '100%', marginRight: 15, alignItems: 'center'
                        }}>
                        <Text style={styles.text}>TỪ ĐANG HỌC</Text>

                    </Pressable>
                </View>

            </View>

            <View style={{ width: '100%', marginBottom: 15, flexDirection: 'row', alignItems: 'center' }}>

                <Ionicons name="search" size={30} style={{ color: '#585353', left: 30 }} />

                <TextInput
                    style={styles.input}
                    placeholder="Tìm từ trong danh mục"
                    onChangeText={(text) => boolData ? searchAPI(text) : searchAPI2(text)}
                />

            </View>

            <View style={styles.mid}>
                {
                    data.map((item) =>

                        <View key={item.id} style={styles.contentVip}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={{ width: 28, height: 28, left: 10, top: 10 }}
                            />

                            <View style={{ width: '60%', height: '100%', flexDirection: 'column', marginLeft: 20, paddingTop: 10, alignSelf: 'flex-start' }}>
                                <Text style={{ fontSize: 16, fontWeight: 700 }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 200 }}>{item.phonetically}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 400, textAlign: 'justify' }}>{item.translate}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', top: 10 }}>
                                <FontAwesome name="circle" size={35} style={{ color: '#3B8CEC', left: 10 }} />
                                <Ionicons name="volume-high" size={20} style={{ color: 'white', left: '-15px' }} />
                                <Entypo name="dots-three-vertical" size={30} style={{ color: "#898181" }} />
                            </View>
                        </View>

                    )

                }
            </View>

            <View style={styles.footer}>

                <TouchableOpacity style={styles.btnGame}>
                    <Text style={{ fontSize: 17, color: 'white' }}>Game</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.btnOnTap}>
                        <Text style={{ fontSize: 17, color: 'white' }}>Ôn tập</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnOnTap}>
                        <Text style={{ fontSize: 17, color: 'white' }}>Tập viết</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnOnTap}>
                        <Text style={{ fontSize: 17, color: 'white' }}>Luyện tập</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={boolModal}
                onBackdropPress={handleModal}
            >
                <View style={{ width: '40%', height: 80, backgroundColor: 'white', alignSelf: 'flex-end', top: '-240px', left: 20 }}>
                    <Pressable style={{ borderBottomWidth: 1, padding: 10, paddingTop: 10 }}>
                        <Text style={{ fontSize: 14 }}>Thêm từ vựng</Text>
                    </Pressable>

                    <Pressable
                        onPress={async () => {
                            try {
                                await getAPIDangKyVip();
                                handleSortData();
                            } catch (error) {
                                console.error("Error:", error);
                            }
                        }}
                        style={{ padding: 10, paddingTop: 10 }}>
                        <Text style={{ fontSize: 14 }}>{sort ? "Sắp xếp A-Z" : "Sắp xếp mới nhất"}</Text>
                    </Pressable>

                </View>

            </Modal>
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
        height: 90,
        backgroundColor: '#E86A0F',
        marginBottom: 15
    },

    head1: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row'
    },

    head2: {
        width: '100%',
        height: 30,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

    mid: {
        width: '90%',
        height: 380,
        backgroundColor: 'white',
        left: 20,
        marginBottom: 3,
        overflow: 'scroll',

    },

    footer: {
        width: '90%',
        height: 90,
        left: 20,
        bottom: '-10px',
    },

    text: {
        fontSize: 15,
        fontWeight: 600,
        color: 'white'
    },

    input: {
        width: '90%',
        padding: 10,
        paddingLeft: 50,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        color: '#585353',
        marginLeft: '-10px'
    },

    contentVip: {
        width: '100%',
        height: 'auto',
        border: '1px solid #C4C4C4',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },

    btnGame: {
        width: '100%',
        height: 40,
        backgroundColor: '#E86A0F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 10
    },

    btnOnTap: {
        width: '30%',
        height: 40,
        backgroundColor: '#E86A0F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    button: {
        borderBottomColor: '#F2DCCC'
    },

    buttonPress: {
        borderBottomColor: '#F2DCCC',
        borderBottomWidth: 5
    },

});
