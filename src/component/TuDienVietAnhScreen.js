import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, CheckBox, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function TuDienVietAnhScreen() {
    const navigation = useNavigation();
    var [data, setData] = useState([]);
    const [isSelected, setSelection] = useState(false);

    useEffect(() => {
        getAPIDangKyVip()
    }, []);

    const getAPIDangKyVip = async () => {
        const url = "http://localhost:3000/dataTuDienVietAnh";
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
                <Ionicons name="arrow-back" size={30} style={{ color: 'white', left: 20 }} /></Pressable>
                <Text style={{ fontSize: 20, color: 'white', left: 40 }}>Từ điển Việt Anh</Text>
            </View>

            <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>

                <Ionicons name="search" size={30} style={{ color: '#585353', left: 30 }} />

                <TextInput
                    style={styles.input}
                    placeholder="Nhập từ tiếng Việt"
                />

            </View>

            <View style={styles.mid}>
                {
                    data.map((item) =>

                        <View key={item.id} style={styles.contentVip}>
                            <FontAwesome name='clock-o' size={30} style={{ color: '#C4C4C4' }} />
                            <Text style={{ fontSize: 18, left: 15, width:'60%' }}>{item.title}</Text>
                            <Feather name='x' size={30} style={{ color: '#898181', left: 10 }}/>
                            <Feather name='arrow-up-left' size={30} style={{ color: '#898181', left: 20 }}/>

                        </View>

                    )

                }
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
        width: '100%',
        height: '50px',
        border: '1px solid #C4C4C4',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
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
