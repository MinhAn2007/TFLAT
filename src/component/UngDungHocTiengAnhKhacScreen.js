import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, CheckBox, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function UngDungHocTiengAnhKhacScreen() {
    var [data, setData] = useState([]);
    var [content, setContent] = useState([]);

    var [imgUrl, setImgUrl] = useState("");

    const [isSelected, setSelection] = useState(false);

    useEffect(() => {
        getAPIDangKyVip()
    }, []);

    const getAPIDangKyVip = async () => {
        const url = "http://localhost:3000/dataUngDungHocTiengAnhKhac";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Ionicons name="arrow-back" size={30} style={{ color: 'white', left: 20 }} />
                <Text style={{ fontSize: 20, color: 'white', left: 40 }}>Ứng dụng học tiếng Anh khác</Text>
            </View>

            {
                data.map((item) =>
                    <View key={item.id} style={styles.contentVip}>
                        <View style={{ width: '100%', height: 'auto', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                            <Image
                                source={{ uri: item.imgUrl }}
                                style={{ width: 40, height: 40 }}
                            />

                            <Text style={{ fontSize: 16, fontWeight: '500', left: 10, width:'75%' }}>{item.title}</Text>

                            <Feather name="arrow-up" size={30} style={{ color: 'black' }} />

                        </View>

                        <View style={{left: 10, marginTop: 10}}>
                            {
                                item.content.map((element) =>
                                    <View>
                                        <Text style={styles.text}>{element.content1}</Text>
                                        <Text style={styles.text}>{element.content2}</Text>
                                        <Text style={styles.text}>{element.content3}</Text>
                                        <Text style={styles.text}>{element.content4}</Text>
                                        <Text style={styles.text}>{element.content5}</Text>
                                    </View>
                                )
                            }
                        </View>

                    </View>
                )
            }


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
        backgroundColor: '#0052B4',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },

    mid: {
        width: '90%',
        height: 'auto',
        backgroundColor: 'white',
        left: 20,
        overflow: 'scroll',
        borderRadius: 10
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
        width: '90%',
        height: 'auto',
        backgroundColor: 'white',
        marginBottom: 20,
        marginLeft: 20,
        paddingBottom: 5,
        paddingTop: 10
    },

    text:{
        width:'95%',
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 5
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
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }

});
