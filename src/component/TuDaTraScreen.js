import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, CheckBox, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

//npx json-server --watch TFlat.json

export default function TuDaTraScreen() {
    const navigation = useNavigation();
    var [data, setData] = useState([]);
    const [isSelected, setSelection] = useState(false);

    var [title, setTitle] = useState("")
    var [phonetically, setPhonetically] = useState("")
    var [translate, setTranslate] = useState("")

    useEffect(() => {
        getAPIDangKyVip()
    }, []);

    const getAPIDangKyVip = async () => {
        const url = "http://localhost:3000/dataTuDaTra";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }

    const saveAPITuDaTra = async (data) => {
        try {
            const url = "http://localhost:3000/dataTuCuaBan1";
            let result = await fetch(url, {
                method: "POST",
                headers: { 'Accept': 'application/json, text/plain, */*', "Content-Type": "application/json" },
                body: JSON.stringify({ title: data.title, phonetically: data.phonetically, translate: data.translate, id: data.id })
            });
            result = await result.json();

        } catch (error) {
            console.error("Save API error:", error);
            alert("Error");
        }
    };

    const patchAPITuDaTra = async (data, starAPI) => {
        try {
            const url = "http://localhost:3000/dataTuDaTra";
            let result = await fetch(`${url}/${data}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ note: starAPI })
            });
            result = await result.json();
            if (result) {
                getAPIDangKyVip();
                alert("Patch success")
            }
        } catch (error) {
            console.error("Patch API error:", error);
            alert("Error");
        }
    };

    const deleteAPITuDaTra = async (id) => {
        try {
            const url = "http://localhost:3000/dataTuCuaBan1/" + id;
            let result = await fetch(url, {
                method: "DELETE",
            });
            result = await result.json();

        } catch (error) {
            console.error("Delete API error:", error);
            alert("Error");
        }
    };

    const searchAPI = async (text) => {

        const url = `http://localhost:3000/dataTuDaTra?q=${text}`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }
    const speakAPI = (text) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    };

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} style={{ color: 'white', left: 20 }} /></Pressable>
                <Text style={{ fontSize: 20, color: 'white', left: 40 }}>Từ đã tra ({data.length})</Text>
            </View>

            <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>

                <Ionicons name="search" size={30} style={{ color: '#585353', left: 30 }} />

                <TextInput
                    style={styles.input}
                    placeholder="Tìm từ trong danh mục"
                    onChangeText={(text) => searchAPI(text)}
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
                                <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => speakAPI(item.title)}>
                                    <FontAwesome name="circle" size={35} style={{ color: '#3B8CEC', left: 10 }} />
                                    <Ionicons name="volume-high" size={20} style={{ color: 'white', left: '-15px' }} />
                                </Pressable>


                                <AntDesign name="staro" size={30} style={item.note ? styles.buttonPress : styles.button}
                                    onPress={async () => {
                                        await patchAPITuDaTra(item.id, true)

                                        await saveAPITuDaTra(item)
                                    }}
                                />

                                <AntDesign name="star" size={30} style={{ ...item.note ? styles.buttonPress2 : styles.buttonPress }}
                                    onPress={async () => {
                                        await patchAPITuDaTra(item.id, false)

                                        await deleteAPITuDaTra(item.id)
                                    }}
                                />

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
        backgroundColor: '#FF0000',
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
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    button: {
        color: "black"
    },

    buttonPress: {
        display: 'none'
    },

    buttonPress2: {
        color: "yellow"
    },

});
