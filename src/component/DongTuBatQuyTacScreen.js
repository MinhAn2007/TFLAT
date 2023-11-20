import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, CheckBox, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function DongTuBatQuyTacScreen() {
    var [data, setData] = useState([]);
    const [isSelected, setSelection] = useState(false);

    useEffect(() => {
        getAPIDangKyVip()
    }, []);

    const getAPIDangKyVip = async () => {
        const url = "http://localhost:3000/dataDongTuBatQuyTac";
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
                <Text style={{ fontSize: 20, color: 'white', left: 40 }}>Động từ bất quy tắc - ({data.length}) %</Text>
            </View>

            <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>

                <Ionicons name="search" size={30} style={{ color: '#585353', left: 30 }} />

                <TextInput
                    style={styles.input}
                    placeholder="Tìm từ trong danh mục"
                />

            </View>

            <View style={styles.mid}>
                {
                    data.map((item) =>

                        <View key={item.id} style={styles.contentVip}>
                            <View style={{ width: '100%', height: 'auto', flexDirection: 'row', alignItems: 'center' }}>
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
                                    <Ionicons name="star-outline" size={30} />
                                </View>

                            </View>

                            <View style={{ width: '100%', height: 'auto', marginTop: 5, paddingLeft: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 400, color: 'purple', width: '70%' }}>
                                        {item.P}
                                        <Ionicons name="volume-low-outline" size={30} style={{ color: '#3B8CEC', top: 7 }} />
                                    </Text>

                                    <Text style={{ fontSize: 16, fontWeight: 600, color: 'purple', left: 70 }}>P</Text>

                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 400, color: 'purple', width: '70%' }}>
                                        {item.PP}
                                        <Ionicons name="volume-low-outline" size={30} style={{ color: '#3B8CEC', top: 7 }} />
                                    </Text>

                                    <Text style={{ fontSize: 16, fontWeight: 600, color: 'purple', left: 65 }}>PP</Text>

                                </View>


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
        backgroundColor: '#815F2C',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },

    mid: {
        width: '90%',
        height: 400,
        backgroundColor: 'white',
        left: 20,
        marginBottom: 10,
        overflow: 'scroll',
    },

    footer: {
        width: '90%',
        height: 90,
        left: 20,
        bottom: '-10px',
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
        backgroundColor: '#815F2C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }

});
