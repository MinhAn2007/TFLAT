import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, CheckBox, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
export default function DichVanBanScreen() {
    const navigation = useNavigation();
    var [data, setData] = useState([]);

    var [star, setStar] = useState(false)
    const [translatedText, setTranslatedTextdata] = useState("");
    const [searchText, setSearchText] = useState("");

    const [boolInput, setBoolInput] = useState(false)

    useEffect(() => {
        getAPIDangKyVip()
    }, []);

    const getAPIDangKyVip = async () => {
        const url = "http://localhost:3000/dataDichVanBan";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }

    const patchAPITuDaTra = async (data, starAPI) => {
        try {
            const url = "http://localhost:3000/dataDichVanBan";
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

    const speakAPI = (text) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    };


    const handleSearch = (text) => {
        console.log("Searching for:", text);
        const fetchTranslation = async () => {
            try {
                const response = await fetch(
                    `https://api.mymemory.translated.net/get?q=${text}&langpair=en|vi`
                );
                const data = await response.json();

                if (data && data.responseData) {
                    setTranslatedTextdata(data.responseData.translatedText);

                    const saveResponse = await fetch("http://localhost:3000/dataDichVanBan", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id: Math.floor(Math.random() * 1000) + 1,
                            title: text,
                            translate: data.responseData.translatedText,
                            note: false,
                        }),
                    });

                    const saveData = await saveResponse.json();
                    console.log("Saved data:", saveData);
                }
            } catch (error) {
                console.error("Error fetching translation:", error);
            }
        };

        fetchTranslation();
    };

    const handleSearchVN = (text) => {
        console.log("Searching for:", text);
        const fetchTranslation = async () => {
            try {
                const response = await fetch(
                    `https://api.mymemory.translated.net/get?q=${text}&langpair=vi|en`
                );
                const data = await response.json();

                if (data && data.responseData) {
                    setTranslatedTextdata(data.responseData.translatedText);

                    const saveResponse = await fetch("http://localhost:3000/dataDichVanBan", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id: Math.floor(Math.random() * 1000) + 1,
                            title: text,
                            translate: data.responseData.translatedText,
                            note: false,
                        }),
                    });

                    const saveData = await saveResponse.json();
                    console.log("Saved data:", saveData);
                }
            } catch (error) {
                console.error("Error fetching translation:", error);
            }
        };

        fetchTranslation();
    };

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} style={{ color: 'white', left: 20 }} /></Pressable>
                <Text style={{ fontSize: 20, color: 'white', left: 40 }}>Dịch văn bản</Text>
            </View>

            <View style={{ width: '90%', height: 90, backgroundColor: 'white', marginBottom: 20, marginLeft: 20, flexDirection: 'row' }}>
                <TextInput
                    multiline={true}
                    style={styles.input}
                    placeholder="Nhập cụm từ, câu văn hoặc đoạn văn."
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <View style={{ flexDirection: 'column', paddingTop: 7 }}>
                    <Feather name='x' size={30} style={{ color: '#898181', left: 13 }} onPress={() => {
                        setBoolInput(false),
                            setSearchText("")
                    }} />
                    <Pressable
                    onPress={() => speakAPI(searchText)}
                     style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="circle" size={35} style={{ color: '#3B8CEC', left: 13 }} />
                        <Ionicons name="volume-high" size={20} style={{ color: 'white', right: 12 }} />
                    </Pressable>
                </View>

            </View>

            <View style={{ marginLeft: 20 }}>

                <TextInput
                    multiline={true}
                    style={boolInput ? styles.input2 : styles.hiddenInput}
                    value={translatedText}
                    editable={false}
                />

            </View>




            <View style={{ width: '90%', height: 40, marginBottom: 30, marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="square" size={45} style={{ color: '#7A7474', left: 27 }} />
                <FontAwesome name="microphone" size={25} style={{ color: 'white' }} />

                <FontAwesome name="square" size={45} style={{ color: '#7A7474', left: 32 }} />
                <Feather name="camera" size={25} style={{ color: 'white' }} />

                <FontAwesome name="square" size={45} style={{ color: '#7A7474', left: 33 }} />
                <FontAwesome name="picture-o" size={25} style={{ color: 'white' }} />

                <FontAwesome name="square" size={45} style={{ color: '#7A7474', left: 70 }} />
                <Ionicons name="trash-bin-outline" size={25} style={{ color: 'white', left: 38 }} />

                <FontAwesome name="square" size={45} style={{ color: '#7A7474', left: 70 }} />
                <Feather name="arrow-down" size={25} style={{ color: 'white', left: 38 }} />
            </View>

            <View style={{ width: '90%', height: 40, marginBottom: 20, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnOnTap} onPress={() => {
                    handleSearchVN(searchText),
                        setBoolInput(true)
                }
                }>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>Việt - Anh</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOnTap} onPress={() => {
                    handleSearch(searchText),
                        setBoolInput(true)
                }}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>Anh - Việt</Text>
                </TouchableOpacity>

            </View>

            {
                data.map((item) =>

                    <View key={item.id} style={styles.contentVip}>
                        <View style={{ flexDirection: 'column', width: '70%' }}>
                            <Text style={{ fontSize: 17, fontWeight: 500 }}>{item.title}</Text>
                            <Text style={{ fontSize: 16, fontWeight: 400 }}>{item.translate}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Pressable
                                onPress={() => speakAPI(item.title)}
                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome name="circle" size={35} style={{ color: '#3B8CEC', left: 13 }} />
                                <Ionicons name="volume-high" size={20} style={{ color: 'white', right: 12 }} />
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
        backgroundColor: '#9F109F',
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
        width: '85%',
        height: 90,
        fontSize: 14,
        borderRadius: 5,
        backgroundColor: 'white',
        color: '#585353',
        outlineStyle: 'none',
        paddingLeft: 10,
        textAlignVertical: 'top',
        padding: 10
    },

    input2: {
        width: '95%',
        height: 90,
        fontSize: 14,
        borderRadius: 5,
        backgroundColor: 'white',
        color: '#585353',
        outlineStyle: 'none',
        paddingLeft: 10,
        textAlignVertical: 'top',
        padding: 10,
        marginBottom: 20
    },

    contentVip: {
        width: '90%',
        height: 'auto',
        border: '1px solid #C4C4C4',
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 20
    },

    btnOnTap: {
        width: '40%',
        height: 45,
        backgroundColor: '#9F109F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 20
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

    hiddenInput: {
        width: 0,
        height: 0,
    },

});
